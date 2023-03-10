const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  instructor: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  students: {
    type: [mongoose.SchemaTypes.ObjectId],
  },
  announcement: {
    type: String,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Course', courseSchema);
