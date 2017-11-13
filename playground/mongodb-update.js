//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    
  //findOneAndUpdate
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5a092f935d1c1cee46eaf9d7')
//                                            
//    }, {
//        $set:{
//            completed: true,
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) =>{
//        console.log(result);
//    })

    
db.collection('User').findOneAndUpdate({
    _id: new ObjectID("5a09277c126dcd54817f506c")
},
    {$set:{
        name: 'Tom'
    } , $inc: {
    age: 1
    } 
},
    {
   returnOriginal: false
}).then((result)=>{
    console.log(result);
});    
    
// db.collection('User').findOneAndUpdate({
//    _id: new ObjectID("5a09277c126dcd54817f506c")
//},{
//    $inc:{
//        age: 1
//    }
//}, {
//    returnOriginal: false
//}).then((result)=>{
//    console.log(result);
//});    
//       
//    
    
   // db.close();
});
