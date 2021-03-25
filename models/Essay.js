const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EssaySchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  subject: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
});

module.exports = Essay = mongoose.model('Essay', EssaySchema);