var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res)=>{

    // res.send(ObjectID.isValid(req.params.id));

    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send();
    }else{
        Todo.findById(req.params.id).then((todo)=>{
            if(todo){
                res.send(todo);
            }else{
                res.status(404).send();
            }
        },(e)=>{
            res.status(400).send();
        });
    }
    
})
app.listen('4000', ()=>{
    console.log('Started on port 4000');
});

module.exports={app}
