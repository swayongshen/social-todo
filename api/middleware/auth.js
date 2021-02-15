/**
 * Verifies user's token
 */

const { User } = require('../mongo_models/UserModel');

/**
 * This is an express middlware method which processes a request and 
 * provides a respond before calling next function.
 * 
 * This method takes the authToken stored in user's cookies then checks if it
 * is in the database.
 */
const auth = (req, res, next) => {
    let token = req.cookies.authToken;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        req.token = token
        req.user = user;
        next();
    });
}

module.exports = { auth }