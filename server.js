const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/blogs',getAllblogs);




let port= 3000;

app.listen(port,()=>{console.log(`listening on port http://localhost:${port}`)})

