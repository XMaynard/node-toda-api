const {mongoose} = require('./../server/de/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5a0cb865f3cad6b80ff5d260';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
})