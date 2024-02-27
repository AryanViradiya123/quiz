const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questiondata = new Schema({
  questiontext: String,
  questiontype:{
    type: String,
    enum : ["True","False"],
    default : "False",
  }
});

const question = mongoose.model('question',questiondata)
module.exports=question