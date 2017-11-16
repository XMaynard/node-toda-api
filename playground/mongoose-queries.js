const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5a0b708e032fb09866132453';

//if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) =>{
//    if(!todo){
//        return console.log('ID not found');
//    }
//    console.log('Todo by ID', todo);
//}).catch((e) => console.log(e));

User.find({
    _id: id
}).then((user) =>{
    console.log('Users: ', user);
});

User.findOne({
    _id: id
}).then((user) =>{
    console.log('user:', user);
});

User.findById(id).then((user) =>{
    if(!user){
        return console.log('User cannot be found!');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));