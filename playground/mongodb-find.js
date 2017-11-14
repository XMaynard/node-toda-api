//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');
  
//    db.collection('Todos').find({completed:false}).toArray().then((docs) =>{
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) =>{
//        console.log('Unable to fetch todos', err);
//    });
    
    db.collection('User').find({name: 'John'}).count().then((count) => {
        console.log(`Number of Item:  ${count}`);
    }, (err) =>{
        console.log('Unable to count items', err); 
    });
    
    db.collection('User').find({name: 'John'}).toArray().then((docs)=>{
        console.log('User list:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to find documents');
    });
    
   // db.close();
});