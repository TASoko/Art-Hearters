const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  
   Pledges: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      Amount: {
        type: String,
        required: true
      },
      Purpose: {
        type: String
      },
     
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  Volunteers: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);