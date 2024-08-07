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

// app.post('/api/users/', (req, res) => {
//     const body = req.body;
//     users.push({id: users.length+1,...body});
//     fs.writeFile('./mock_data.json', JSON.stringify(users),(err,data)=>{
//             return res.json({ status: "success", id: users.length});
//         });
// });


app
.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    if(!user) return res.status(404).json({error:"User Not Found"})
    return res.json(user)
})
.patch((req,res)=>{
    //Edit user with id
    res.json({status:"pending"})
})
.delete((req,res)=>{
    //Delete user with id
    res.json({status:"pending"})
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({id: users.length+1,...body});
    fs.writeFile('./mock_data.json', JSON.stringify(users),(err,data)=>{
            return res.json({ status: "success", });
        });
});

/* Delete method self */

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    users.splice(userIndex, 1); // Remove user from the array

    fs.writeFile('./mock_data.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Could not update data" });
        }
        return res.json({ status: "success", message: "User deleted successfully" });
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