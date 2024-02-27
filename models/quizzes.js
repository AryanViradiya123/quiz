const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizzesdata = new Schema({
  title: String,
  description:String,
  userid : {
    type: Schema.Types.ObjectId, ref: 'user'
  },
  slotSchema: {
    type: Date,
    default: Date.now
  }
});

const quizzes = mongoose.model('quizzes',quizzesdata)
module.exports=quizzes