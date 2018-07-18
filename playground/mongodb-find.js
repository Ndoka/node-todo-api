const {MongoClient, ObjectID} = require('mongodb');



const assert = require('assert');


const dbName = 'TodoApp';
const url = "mongodb://localhost:27017";

MongoClient.connect(url,{useNewUrlParser: true}, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successflly to server");
    const db = client.db(dbName);

//    db.collection('Todos').find({
//        _id: new ObjectID('5b4d650959d64e55e465ac6e')
//    }).toArray().then((docs)=>{
//        console.log(JSON.stringify(docs, undefined, 2))
//    }, (err)=>{
//        console.log('Unable to fetch todos', err)
//    })
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`)
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // })
    db.collection('Users').find({name:'Mike'}).count().then((count)=>{
        console.log(`Todos count: ${count}`)
    }, (err)=>{
        console.log('Unable to fetch todos', err)
    })
    // client.close();
});