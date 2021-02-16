var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config').get(process.env.NODE_ENV);
const salt = 10;

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    token: {
        type: String
    }
});

//Saves user data and hash password
userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(salt, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })

        })
    }
    else {
        next();
    }
});


//Compares the users entered password with database duing login 
userSchema.methods.comparePassword = function (candidatePassword, callBack) {
    //Compare candidate password with database password.
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callBack(err);
        callBack(null, isMatch);
    });
}

//Generates token when user logs in
userSchema.methods.generateToken = function (callBack) {
    var user = this;
    //Generates user token based on user id, using the secret
    var token = jwt.sign(user._id.toHexString(), config.SECRET);
    user.token = token;
    user.save(function (err, user) {
        if (err) return callBack(err)
        callBack(null, user)
    });
};

//Validates token for auth routes middleware
userSchema.statics.findByToken = function (token, callBack) {
    var user = this;
    jwt.verify(token, config.SECRET, function (err, decode) {//this decode must give user_id if token is valid .ie decode=user_id
        user.findOne({ id: decode, token: token }, function (err, user) {
            if (err) return callBack(err);
            callBack(null, user);
        });
    });
};

const User = mongoose.model('User', userSchema)
module.exports = { User };