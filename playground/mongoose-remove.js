const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove({_id:'5a0dcb04659e29ffe070da53' }).then((todo) =>{
//
// });

Todo.findByIdAndRemove('5a0dcf67659e29ffe070dae7').then((todo) =>{
   console.log(todo); 
});