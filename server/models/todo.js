var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

// var newTodo = new ToDo({
//     text:'  Edit this video'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo');
// });

module.exports = {Todo};