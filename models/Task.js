const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({  
  title: String,
  description: String
});
module.exports = mongoose.model('Tasks', TaskSchema);