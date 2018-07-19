const {MongoClient, ObjectID} = require('mongodb');



const assert = require('assert');


const dbName = 'TodoApp';
const url = "mongodb://localhost:27017";

MongoClient.connect(url,{useNewUrlParser: true}, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successflly to server");
    const db = client.db(dbName);
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5b4eb6ce59d64e55e46611e7")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });
    db.collection("Users").findOneAndUpdate({
        _id:new ObjectID("5b46dfee99fc3f2101f85c77")
    },{
        $set:{
            name: "Tito Ndoka"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
    // client.close();
});