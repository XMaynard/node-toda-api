//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    
  

    //deletemany
//    db.collection('Todos').deleteMany({name: 'eat lunch'}).then((result) => {
//        console.log(result);
//    });
    //deleteOne
   
//    db.collection('Todos').deleteOne({name:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    });
    
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//       console.log(result); 
//    });
    
//    db.collection('User').deleteMany({name: 'John'}).then((result) =>{
//        console.log(result);
//    });
    db.collection('User').findOneAndDelete({_id: new ObjectID("5a092bbdf1d7355495f6b0b2")}).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    
   // db.close();
});
