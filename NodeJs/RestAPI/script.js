/* RestFull  API */

// 1. server & client arechitecture

const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA (1).json')
const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

// Routes (Rest API)
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// app
// .route('/api/users/:id')
// .get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user)
// })

// app
// // .route('/api/users/:id')
// .get((req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user)
// })
// .patch((req,res)=>{
//     //Edit user with id
//     res.json({status:"pending"})
// })
// .delete((req,res)=>{
//     //Delete user with id
//     res.json({status:"pending"})
// })

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body});
    fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users),(err,data)=>{
            return res.json({ status: "success", id: users.length});
        });
});

// app.patch('/api/users:id',(req,res)=>{
//     // topod :create new users
//     return res.json({status:"pending"})
// })

// app.delete('/api/users',(req,res)=>{
//     // topod :delete the user
//     return res.json({status:"pending"})
// })

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