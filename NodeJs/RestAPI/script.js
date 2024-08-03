/* RestFull  API */

// 1. server & client arechitecture

const express = require('express');
const users = require('./MOCK_DATA (1).json')
const app = express();
const PORT = 4040;

// Routes
app.get("/api/users", (req,res) => {
    return res.json(users);
});

app
.route('/api/users/:id')
.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
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

app.post('/api/users',(req,res)=>{
    // topod :ccreate new users
    return res.json({status:"pending"})
})

// app.patch('/api/users:id',(req,res)=>{
//     // topod :ccreate new users
//     return res.json({status:"pending"})
// })

// app.delete('/api/users',(req,res)=>{
//     // topod :ccreate new users
//     return res.json({status:"pending"})
// })

app.get("/users",(req,res) => {
    const html = `
        <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    res.send(html)
})

app.listen(PORT, ()=>{ console.log(`server Started at Port:${PORT}`)})