
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email:String,
    passWord:String,
    phoneNumber:Number,
    country:String,
    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
  });




  module.exports = mongoose.model('User', userSchema);