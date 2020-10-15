
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email:String,
    passWord:String,
    phoneNumber:Number,
    country:String,
    blogs: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
  });




  module.exports = mongoose.model('User', userSchema);