const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userquizzesdata = new Schema({
    userid : {
      type: Schema.Types.ObjectId, ref: 'user',
      required : true
    },
    quizzesid : {
      type: Schema.Types.ObjectId, ref: 'quizzes',
      required : true
    },
    result: {
      type: String,
      enum : ["leval up","Fail"],
      default : "Fail",
      required : true
    } 
});

const userquizzes = mongoose.model('userquizzes',userquizzesdata)
module.exports=userquizzes