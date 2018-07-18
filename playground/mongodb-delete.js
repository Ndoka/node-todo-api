const {MongoClient, ObjectID} = require('mongodb');



const assert = require('assert');


const dbName = 'TodoApp';
const url = "mongodb://localhost:27017";

MongoClient.connect(url,{useNewUrlParser: true}, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successflly to server");
    const db = client.db(dbName);
    //deleteMany
    // db.collection('Users').deleteMany({name:'Tito Ndoka'}).then((result)=>{
    //     console.log(result);
    // })
    //deleteOne
    db.collection('Users').deleteOne({_id:new ObjectID('5b4c19ca6de45c1c7eac409e')}).then((result)=>{
        console.log(result);
    })
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // })

    // client.close();
});