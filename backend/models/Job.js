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
 
  Description: {
    type: String,
    required: true
  },

  Position: {
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
