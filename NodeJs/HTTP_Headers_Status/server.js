/* Express Middleware */
// => more information in `Theory.txt`;


const express = require('express');
const fs = require('fs');
const users = require('./mock_data.json')
const app = express();
const PORT = 7070;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`,
    (err,data)=>{
        next();
    })
    console.log("Hello From your own middleware");
    // return res.json({msg:"Hello From middleware"})
    req.myUserName = "DevBharadva"
    next();
})

app.use((req,res,next)=>{
    console.log("Hello From your secound middleware",req.myUserName);
    // return res.end("Hello");
    next();
})

// Routes (Rest API)
app.get("/api/users", (req, res) => {
    console.log('I am in get route ',req.myUserName);
    return res.json(users);
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body});
    fs.writeFile('./mock_data.json', JSON.stringify(users),(err,data)=>{
            return res.json({ status: "success", id: users.length+1});
        });
});
    
// Routes
app.get("/users", (req, res) => {
    const html = `
        <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    res.send(html)
})

app.listen(PORT, () => { console.log(`server Started at Port:${PORT}`) })