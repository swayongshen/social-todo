const { User } = require('./mongo_models/userModel');


exports.registerUser = async (req, res) => {
    //Creates a new user instance based on the mongoDb schema
    const user = new User(req.body);

    //Attempts to add this user to database
    await user.save((err, doc) => {
        if (err) { 
            return res.status(422).json({ errors: err }) 
        } else {
            const userData = {
                firstName: doc.firstName,
                lastName: doc.lastName,
                email: doc.email,
            }
            //Passes success message back to client, containing user data except password.
            return res.status(200).json(
                {
                    success: true,
                    message: 'Successfully Signed Up',
                    userData
                }
            )
        }
    });
}

exports.loginUser = (req, res) => {
    //Attempts to find a user with the same email as the email in request.
    User.findOne({ 'email': req.body.email }, (err, user) => {
        //No such email
        if (!user) {
            return res.status(404).json({ success: false, message: 'User email not found!' });
        //Found the email
        } else {
            //Compare request password with password in database.
            user.comparePassword(req.body.password, (err, isMatch) => {
                //Passwords don't match.
                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Wrong Password!' });
                //If passwords match, generate token.
                } else {
                    user.generateToken((err, user) => {
                        if (err) {
                            return res.status(400).send({ err });
                        } else {
                            const data = {
                                userID: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                token: user.token
                            }
                            //Saves token to cookie and responds that login was successful.
                            res.cookie('authToken', user.token).status(200).json(
                                {
                                    success: true,
                                    message: 'Successfully Logged In!',
                                    userData: data
                                })
                        }
                    });
                }
            });
        }
    });
}

exports.logoutUser = (req, res) => {
    //Removes user's token from database, so that the next time he tries to access the app, he needs to login.
    User.findByIdAndUpdate(
        { _id: req.user._id }, { token: '' },
        (err) => {
            if (err) return res.json({ success: false, err })
            return res.status(200).send({ success: true, message: 'Successfully Logged Out!' });
        })
}

//Gets authenticated user's details
exports.getUserDetails = (req, res) => {
    return res.status(200).json({
        isAuthenticated: true,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,

    });
};