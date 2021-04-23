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
    type: String
  },
 
  description: {
    type: [String],
    required: true
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
  }
});

module.exports = mongoose.model('Event', EventSchema);
