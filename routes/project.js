const express = require('express');
const router = express.Router();
const Project = require('../models/project'); 
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (error) {
    next(error);
  }
});

// Get all projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  if (!req.params.id) res.status(422).send({ data: { error: true, message: 'Id is reaquire' } })
  try {
      const data = await Project.find({ _id: mongoose.Types.ObjectId(req.params.id) }).sort({ order: 1 })
      return res.send(data)
  } catch (error) {
      return res.send(error)
  }
})

// Update a project
router.put('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (error) {
    next(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTask = await Project.findByIdAndRemove(ObjectId(req.params.id));
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
