const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referência ao modelo User
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
