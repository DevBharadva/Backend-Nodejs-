/* Building HTTP Server in Nodejs  */

/* URL: uniform Resourcce Locator */

const http = require('http');
const fs = require('fs');

// const server = http.createServer((req,res)=> {
//     // console.log(req.headers);
//     // console.log(req);
//     const log = `${Date.now()}: ${req.url} New Res Received\n`;
//     fs.appendFile("log.txt",log,(err,data) => {
//         // res.end("Hello And Welcome to Our Office")

//         switch(req.url){
//             case '/': 
//             res.end("HomePage");
//             break
//             case '/about': 
//             res.end("I am Dev Bharadva");
//             break;
//             default: 
//             res.end("404 Not Found")
//         }
//     })
// });

// server.listen(4000, () => console.log("Your Server Start!") )

