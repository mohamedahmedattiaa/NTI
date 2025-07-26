const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
    trim: true,
    maxlength: 150
  },
  content: {
    type: String,
    required: [true, 'The content is required'],
    minlength: 10
  },
  author: {
    type: String,
    required: [true, 'The author is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'The category is required'],
    enum: ['Backend', 'Frontend', 'DevOps', 'Security', 'Data']
  },
  tags: {
    type: [String],
    default: []
  },
  published: {
    type: Boolean,
    default: false
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
