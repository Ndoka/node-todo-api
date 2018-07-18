// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



const assert = require('assert');


const dbName = 'TodoApp';
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successflly to server");
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2)
    // });

    // db.collection('Users').insertOne({

    //     name:'Tito Ndoka',
    //     age:35,
    //     location:'Kijabe'
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});