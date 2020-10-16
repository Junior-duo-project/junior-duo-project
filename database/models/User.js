
const mongoose = require("mongoose");


let userSchema = mongoose.Schema({
    name: String,
    email:String,
    passWord:String,
    phoneNumber:Number,
    country:String,
    blogs: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
  });




  module.exports = mongoose.model('User', userSchema);