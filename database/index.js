const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blogs");


const Blog = require("./models/Blog");
const User = require("./models/User");



exports.getAllblogs= (req,res)=>{
    Blog.find().sort({ createdAt: -1 }).then(blogs=>res.status(200).json(blogs))
.catch((error) => res.status(500).send({error}))
}

exports.addBlog=(req,res)=>{
    Blog(req.body).save().then((d) =>res.send(d))
    .catch((error)=>res.status(500).send(error))
}

exports.addUser=(req,res)=>{
    User(req.body).save().then((d) =>res.json(d));
}
exports.getOwnBlogs=(req,res)=>{
    User.findOne({_id:req.params.user_Id})
    .populate('blogs')
    .then((user)=>res.json(user.blogs));
}



