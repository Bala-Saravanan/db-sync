const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  desc: String,
  updatedAt: String,
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
