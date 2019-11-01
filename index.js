const express =require('express');
const colors = require('colors');// npm install colors
const server =express();

server.get('/',(req,res)=>{
    res.send('<h1>Hello World with express and nodejs</h1>')
});
server.listen(3000,function(){console.log('server on port 3000'.blue);});
 