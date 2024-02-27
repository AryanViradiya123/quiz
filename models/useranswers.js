const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useranswersdata = new Schema({
    questionid : {
      type: Schema.Types.ObjectId, ref: 'question',
      required : true
    },
    answersid : {
      type: Schema.Types.ObjectId, ref: 'answers',
      required : true
    }
});

const useranswers = mongoose.model('useranswers',useranswersdata)
module.exports=useranswers