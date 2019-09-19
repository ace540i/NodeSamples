const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs'); 
const app = express();
console.log(__dirname);

 app.use('/public',express.static(path.join(_dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'static','index.html'));

});

app.post('/',(req,res)=>{
    console.log(req.body);
    // databse work here
    res.send('sucessfully posted data');
});