// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// // Database connection setup
// mongoose.connect('mongodb+srv://projectmanage:projectmanage@cluster0.q5i7ugy.mongodb.net/projectmanage', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Import routes
// const projectRoutes = require('./routes/projects');
// const taskRoutes = require('./routes/tasks');

// // Use routes
// app.use('/projects', projectRoutes);
// app.use('/tasks', taskRoutes);

// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://projectmanage:projectmanage@cluster0.q5i7ugy.mongodb.net/projectmanage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'projectmanage',
});

// Routes
app.use('/project', projectRoutes);
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server setup
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
