const express = require('express');
const app = express();
const path = require('path');


app.get('/',(req,res)=>{
    // res.send('hello world from express home page');
    app.use('/public',express.static(path.join(__dirname,'static')));
    res.sendfile(path.join(__dirname,'static','index.html'));
});


app.get('/example',(req,res)=>{
    // res.send('hello world from express /example');
});

app.get('/example/:name/:age',(req,res)=>{
   console.log(req.params);
//    res.send('hello world from express /example with params');
console.log(req.query);
  // res.send(req.params.name + " : " + req.params.age);
})

app.listen(3000);