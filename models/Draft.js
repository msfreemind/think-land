const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DraftSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  subject: {
    type: String
  },
  theme: {
    type: String
  },
  body: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});

module.exports = Draft = mongoose.model('Draft', DraftSchema);