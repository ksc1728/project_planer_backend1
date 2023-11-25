// project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  // Define your project schema fields
  // For example:setTitle(projectData.title);
            // setDesc(projectData.description);
            // setAssignedto(projectData.assignedTo);
  title: String,
  description: String,
  assignedTo:String,
  userid:String,
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
