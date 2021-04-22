const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  team: {
    type: String
  },

  location: {
    type: String
  },
 
  description: {
    type: String,
    required: true
  },

  position: {
    type: String
  },
 
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('job', JobSchema);
