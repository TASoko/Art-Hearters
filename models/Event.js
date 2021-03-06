const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String
  },

  location: {
    type: String,
  },
 
  description: {
    type: String,
  },
  
 
      from: {
        type: Date,
        // required: true
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

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
