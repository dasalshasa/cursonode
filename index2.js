const http =require('http');
const colors = require('colors');// npm install colors
//ver codigos de estado wiki
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>hello world from nodejs</h1>');
    res.end();
}).listen(3000,function(){console.log('server on port 3000'.green);});