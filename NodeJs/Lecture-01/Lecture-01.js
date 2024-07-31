
/* What is Node Js */
// => Node js is a runtime Env. for Javascript

/* file system */
// Asycronous and sychronous

// command js

// const fs = require('fs');

// function add(a, b){
//     return 20 + 30;
// }
// console.lo("a+b=",a , b);


// function mul(a,b){
//     return a + b;
// }

// const fs = require('fs');

// // Read a file asynchronously
// fs.readFile('theory.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
console.log(filePath);

