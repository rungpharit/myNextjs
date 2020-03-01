const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String
},{versionKey:false});

const pictureSchema = new Schema({
  img: { data: Buffer, contentType: String }
},{versionKey:false});

const TodoModel = mongoose.model('TodoList',todoSchema);
const PictureModel = mongoose.model('picture',pictureSchema);

module.exports = {
  TodoModel,
  PictureModel
}