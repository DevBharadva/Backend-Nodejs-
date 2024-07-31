const http = require('http')

const server = http.createServer((req,res)=> {
    res.setHeader('dummy','dummy data');
    res.end("<h1>Welcome to my own server-01</h1>")
})

server.listen(1234)