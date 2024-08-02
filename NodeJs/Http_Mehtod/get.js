/* Http GET & POST Method */

// => When you want to get some data from the server

// => When you want to send and mutate some data in server

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Res Received \n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case '/':
                if (req.method === 'GET') res.end('HomePage')
                break;
            case '/about':
                const username = myurl.query.myname;
                res.end(`I am, ${username}`);
                break;
            case '/search':
                const search = myurl.query.search_query;
                res.end('here Are your result for' + search);
                break;
            case '/signup':
                if (req.method === 'GET') res.end("This is a Signup Form")
                else if (req.method === "POST") {
                    res.end("Success");
                }
                break;
            default: res.end("404 Not Found");
        }
    })
});

server.listen(4000, () => console.log("Your Server Start!"))