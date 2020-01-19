const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String
},{versionKey:false});

const TodoModel = mongoose.model('TodoList',todoSchema);

module.exports = TodoModel;