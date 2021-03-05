var express = require('express');
var router = express.Router();

const { auth } = require('../middleware/auth');
const { registerUser, loginUser, logoutUser, getUserDetails } = require('../authController');


/**
 * First, check if user's cookie's token is valid in database. 
 * If valid, call getUserDetails to return user details as response to user.
 */
router.post('/auth', auth, getUserDetails);

/**
 * First check if user's cookie's token is valid in database.
 * If valid, call logoutUser.
 */
router.post('/logout', auth, logoutUser);

router.post('/register', registerUser);

router.post('/login', loginUser);

module.exports = router;
