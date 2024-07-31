const http = require('http')

const server = http.createServer((req,res)=> {
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length','3456');
    res.end("<h1>Welcome to my own server-04</h1>")
})

server.listen(5000)