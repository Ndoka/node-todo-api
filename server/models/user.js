
var mongoose = require('mongoose');

var User = mongoose.model('users', {
    email:{
        required:true,
        type:String,
        minlength:1,
        trim:true
    }
});

var newUser = new User({
    email: 'titus.ndoka@gmail.com'
})

// newUser.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(`Unable to save user ${e}`);
// });

module.exports = {User};