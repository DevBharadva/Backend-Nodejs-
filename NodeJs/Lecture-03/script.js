/* Sync.. Blocking ||  Async.. Non - Blocking Req*/

/* Blocking */


// const fs = require("fs");
// console.log("1");
// const result = fs.readFileSync("block.txt","utf8");

// console.log(result);

// console.log("2");

// --------/* Non - Blocking Req */------------

// const fs = require("fs");
// console.log("1");
// fs.readFile("block.txt","utf8",(err,result)=> {
//     console.log(result);
// });


// console.log("2");

const os = require("os")

console.log(os.cpus().length)

// Default Threqad Pool Size =- 4 
// Max? - 8 core cpu - 8