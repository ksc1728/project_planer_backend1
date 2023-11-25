// task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Define your task schema fields
  // For example:
  title: String,
  description: String,
  assignedTo:String,
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User collection
  projectId: String,
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
