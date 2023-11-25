// // task.js
// const express = require('express');
// const router = express.Router();
// const Task = require('../models/task'); // Create the Task model
// const mongoose = require('mongoose');
// // Create a new task
// router.post('/', async (req, res, next) => {
//   try {
//     // Assuming your request body contains projectId
//     const { projectId, title, description, assignedTo } = req.body;

//     const task = await Task.create({
//       projectId,
//       title,
//       description,
//       assignedTo,
//     });

//     res.json(task);
//   } catch (error) {
//     next(error);
//   }
// });
 
// router.get('/', async (req, res, next) => {
//   try {
//     const projects = await Task.find();
//     res.json(projects);
//   } catch (error) {
//     next(error);
//   }
// });
// router.delete("/delete/:id", (req, res) => {
//   Task.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
//       if (err) {
//           return err;
//       }
//       else {
//           return res.json(data);
//       }
//   })
// })
//   module.exports = router;

const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Create the Task model
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Import ObjectId from mongoose

// Create a new task
router.post('/', async (req, res, next) => {
  try {
    const { projectId, title, description, assignedTo } = req.body;

    const task = await Task.create({
      projectId: ObjectId(projectId), // Convert projectId to ObjectId
      title,
      description,
      assignedTo,
    });

    res.json(task);
  } catch (error) {
    next(error);
  }
});

// Get all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// Delete a task by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndRemove(ObjectId(req.params.id));
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/update/:id', async (req, res, next) => {
  try {
    const project = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
