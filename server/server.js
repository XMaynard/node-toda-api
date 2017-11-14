let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

//middleware
app.use(bodyParser.json());


//route 
app.post('/todos', (req, res) =>{
    let todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc)=>{
        res.send(doc);
        console.log(JSON.stringify(doc, undefined, 2));
    }, (e)=>{
        res.status(400).send(e);
        console.log('Unable to save the todo', e);
    });
});






app.listen(3000, ()=>{
  console.log('Started on port 3000');  
});



