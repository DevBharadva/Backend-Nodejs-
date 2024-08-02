/* Express and Node Js */

/* Http get Method */
// => When you want to get some data from the server

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From Home apge")
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
})

app.get('./profile', (req,res)=> {
    return res.send("Profile Page")
})

app.listen(5050,()=> console.log("Your Server Start!"));

// function myhandler(req, res) {
//     if (req.url == '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Res Received \n`;
//     const myurl = url.parse(req.url, true);
//     console.log(myurl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myurl.pathname) {
//             case '/':
//                 if (req.method === 'GET') res.end('HomePage')
//                 break;
//             case '/about':
//                 const username = myurl.query.myname;
//                 res.end(`I am, ${username}`);
//                 break;
//             case '/search':
//                 const search = myurl.query.search_query;
//                 res.end('here Are your result for' + search);
//                 break;
//             case '/signup':
//                 if (req.method === 'GET') res.end("This is a Signup Form")
//                 else if (req.method === "POST") {
//                     res.end("Success");
//                 }
//                 break;
//             default: res.end("404 Not Found");
//         }
//     })
// };

server.listen(4000, () => console.log("Your Server Start!"))



/* Http post Method */

// => When you want to send and mutate some data in server