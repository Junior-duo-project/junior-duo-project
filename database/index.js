const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blogs");


const Blog = require("./models/Blog");
const User = require("./models/User");



exports.getAllblogs = (req, res) => {
    Blog.find().sort({
            createdAt: -1
        }).then(blogs => res.status(200).json(blogs))
        .catch((error) => res.status(500).send({
            error
        }))
}

exports.addBlog = (req, res) => {

    Blog(req.body).save()
        .then((d) => User.findOneAndUpdate({
            _id: d.author
        }, {
            $push: { blogs: [d] }
        }, {
            new: true
        }))
        .then((d) => res.send(d))
        .catch((error) => res.status(500).send(error))
}


exports.addUser = (req, res) => {
    User(req.body).save().then((d) => res.json(d));
}



exports.getOwnBlogs = (req, res) => {
    User.findOne({
            _id: req.params.user_Id
        })
        .populate('blogs')
        .then((user) => res.json(user.blogs));
}


exports.getAuthor = (req, res) => {
    Blog.findOne({
            _id: req.params.blog_Id
        })
        .populate('author')
        .then((blog) => res.json(blog.author.name))
}

exports.deleteBlog = (req, res) => {
    Blog.deleteOne({
            _id: req.params.blog_Id
        })
        .then(blog => res.json(blog))
}

exports.updateBlogs = (req, res) => {
    Blog.findOneAndUpdate({
            _id: req.params.blog_Id
        }, {
            title: req.body.title,
            description: req.body.description
        }, {
            new: true
        })
        .then(blog => res.json(blog));
}

exports.getAllUsers = (req, res) => {
    User.find() .then(users => res.status(200).json(users))
    .catch((error) => res.status(500).send({
        error
    }))
}