const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getAllblogs,addBlog,addUser}=require('./database/index')
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/blogs',getAllblogs);

app.post('/api/blogs',addBlog);

app.post('/api/user',addUser);


let port= 3000;

app.listen(port,()=>{console.log(`listening on port http://localhost:${port}`)})

