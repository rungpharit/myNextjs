const express = require('express');
const path = require('path');
const uuid = require('uuid')

const app = express(); 

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const todos = [
  {
    id:4,
    title:'Take',
  },
   {
    id:5,
    title:' wife',
  },
  {
    id:6,
    title:'Meeting ',
  }
]



app.get('/', (req,res) => {
  res.send('<div>hello</div>');
});

app.get('/api/todos', (req,res) => {
  res.json(todos);
});

app.post('/api/todos', (req,res) => {
  const payload = req.body;
  res.json(payload);
});

app.delete('/api/todos/:id', (req,res) => {
  const {id} = req.param
  res.json({id});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));