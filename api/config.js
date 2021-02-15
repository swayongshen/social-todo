/**
 * Stores configurations regarding the API server.
 */


const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb://localhost:27017/Users'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}

// var mongoose=require('mongoose');

// const userSchema=mongoose.Schema({
//     firstname:{
//         type: String,
//         required: true,
//         maxlength: 100
//     },
//     lastname:{
//         type: String,
//         required: true,
//         maxlength: 100
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         unique: 1
//     },
//     password:{
//         type:String,
//         required: true,
//         minlength:8
//     },
//     password2:{
//         type:String,
//         required: true,
//         minlength:8

//     },
//     token:{
//         type: String
//     }
// });

// module.exports=mongoose.model('User',userSchema);