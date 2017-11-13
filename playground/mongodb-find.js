//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    

    //deletemany
    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
        console.log(result);
    });
    //deleteOne
    
    //findOneAndDelete
    
    
    
    
   // db.close();
});