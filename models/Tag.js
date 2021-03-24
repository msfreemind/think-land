const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = Tag = mongoose.model('Tag', TagSchema);