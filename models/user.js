const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userdata = new Schema({
  username: String,
  email:String,
  password: String,
  RegistrationDate: {
    type: Date,
    default: Date.now
  }
});

const USER = mongoose.model('user',userdata)
module.exports=USER