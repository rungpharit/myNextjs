const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const TodoList = require('./models/todos');

//Connect mongoDB
mongoose.connect('mongodb://localhost:27017/node-api', { useNewUrlParser: true })

//Handle Error
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
})

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const todos = [{}]

app.get('/', (req,res) => {
  res.send('<div>hello</div>');
});

//Get Data
app.get('/api/todos', async (req,res) => {
  const todos = await TodoList.find({});
  res.json(todos)
});

//Insert Data
app.post('/api/todos', async (req,res) => {
  const payload = req.body;
  const todolist = new TodoList(payload);
  await todolist.save()
  res.status(201).end();
});

//Delete Data
app.delete('/api/todos/:id', async (req,res) => {
  const {id} = req.params;
  await TodoList.findByIdAndDelete(id)

  res.json({msg:'dele'})
  res.status(204).end()
 
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));