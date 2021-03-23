const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviewee: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  essay: {
    type: Schema.Types.ObjectId,
    ref: 'Essay'
  },
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = Review = mongoose.model('Review', ReviewSchema);