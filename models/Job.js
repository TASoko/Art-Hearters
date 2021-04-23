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
 
  position: {
    type: String,
    required: true
  },

  description: {
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
  },
  aws_image_url: {
    type: String
  }
});

module.exports = mongoose.model('job', JobSchema);
