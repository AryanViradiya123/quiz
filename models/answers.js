const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answersdata = new Schema({
  answerstext: String,
  answerstype:{
    type: String,
    enum : ["True","False"],
    default : "False",
  }
});

const answers = mongoose.model('answers',answersdata)
module.exports=answers