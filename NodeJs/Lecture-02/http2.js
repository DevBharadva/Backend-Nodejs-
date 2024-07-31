const http = require('http')

const server = http.createServer((req,res)=> {
    res.setHeader('dummy','dummy data');
    res.end("<h1>Welcome to my own server-02</h1>")
})

server.listen(5678)