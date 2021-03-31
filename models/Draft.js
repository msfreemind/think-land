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
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }]
}, {
  timestamps: true
});

module.exports = Draft = mongoose.model('Draft', DraftSchema);