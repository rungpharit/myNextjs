const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const { TodoModel,PictureModel} = require('./models/todos');
const cors = require('cors');
const formidable = require('formidable');
var fs = require('fs');

//Connect mongoDB
mongoose.connect('mongodb://localhost:27017/node-api', { useNewUrlParser: true })

//Handle Error
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
})

// Allow cross-origin
app.use(cors());

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const todos = [{}]

app.get('/', (req,res) => {
  res.send('<div>hello</div>');
});

//Get Data
app.get('/api/todos', async (req,res) => {
  const todos = await TodoModel.find({});
  res.json(todos)
});

//Insert Data
app.post('/api/todos', async (req,res) => {
  const payload = req.body;
  const todolist = new TodoModel(payload);
  await todolist.save()
  res.status(201).end();
});

//Delete Data
app.delete('/api/todos/:id', async (req,res) => {
  const {id} = req.params;
  await TodoModel.findByIdAndDelete(id)
  res.json({msg:'dele'})
  res.status(204).end()
 
})

app.post('/api/upload' , async  (req,res,next) => {
   
   try{
    const form = formidable({ muliples: true});
    form.uploadDir = './img'
     form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log('files: ',files.image)
      console.log('fields: ',fields)
      const filePicture = new PictureModel();
      filePicture.img.data = fs.readFileSync(files.image._writeStream.path)
      console.log('picu: ',typeof filePicture.img.data)
      filePicture.img.contentType =files.image.type
      console.log('filePicture: ',filePicture)
      filePicture.save()
     
      res.json({ fields, files });
    });
   }catch(e){
     console.log(e)
   }

});

app.get('/api/upload', async (req,res) => {
  console.log('in')
  const picture = await PictureModel.find({});
  console.log(picture[6])
  const  form = formidable({ muliples: true});
  console.log(typeof(picture))
  res.json(picture[6])
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));