const http = require('http');
 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write('<h1>Hello from Nodejs</h1>');
       res.end();
    } 
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Incorrect URL: ' );
        res.write(res.url+'\n\n');        
        res.end();
    }
});

console.log('Server is listening on port 3000');
server.listen('3000');
