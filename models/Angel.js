const mongoose = require('mongoose');

const AngelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  Interests: {
    type: String
  },
 
  location: {
    type: String
  },
  Budgets: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('angel', AngelSchema);
