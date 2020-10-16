const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getAllblogs,addBlog,addUser, getOwnBlogs,getAuthor, deleteBlog, updateBlogs, getAllUsers}=require('./database/index')
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/blogs',getAllblogs);

app.post('/api/blogs',addBlog);

app.post('/api/user',addUser);

app.get('/api/blogs/:user_Id',getOwnBlogs);

app.get('/api/author/:blog_Id',getAuthor);

app.delete('/api/blogs/:blog_Id',deleteBlog);

app.patch('/api/blogs/:blog_Id',updateBlogs);

app.get('/api/users', getAllUsers);

let port= 3000;

app.listen(port,()=>{console.log(`listening on port http://localhost:${port}`)})

