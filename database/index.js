const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blogs");


const Blog = require("./models/Blog");
const User = require("./models/User");



exports.getAllblogs= (req,res)=>{
    Blog.find().then(blogs=>res.json(blogs));
}

exports.addBlog=(req,res)=>{
    Blog(req.body).save().then(() =>res.end());
}

exports.addUser=(req,res)=>{
    User(req.body).save().then(() =>res.end());
}



