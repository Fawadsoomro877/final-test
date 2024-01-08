const mongoose = require('mongoose');

const poetrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A poetry must have a title'],
    unique: true,
    trim: true,
  },
  poet: {
    type: String,
    required: [true, 'A poetry must have an author'],
    trim: true,
  },
  lines: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Poetry = mongoose.model('Poetry', poetrySchema);

module.exports = Poetry;
