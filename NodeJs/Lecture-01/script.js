const fs  = require("fs")

// Sync..
// fs.writeFileSync("./hello.txt","Hello World")

//Async
// fs.writeFileSync("./hello.txt","Hello World", (err) => {})

// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,result) => {
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./hello.txt",new Date().getDate().toLocaleString());


// fs.appendFileSync("./demo.txt",`\nWelcome to Nodejs`);
// fs.appendFileSync("./demo.txt",`\n${Date.now()}Welcome to Nodejs\n`);
// fs.cpSync("./demo.txt","./test.txt");

// fs.unlinkSync("./hello.txt")
// console.log(fs.statSync("./test.txt"));
// fs.mkdir("my-doc/a");