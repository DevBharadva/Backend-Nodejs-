/* Express Middleware */
// => more information in `Theory.txt`;


const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose')
const app = express();
const PORT = 6060;

//conections
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err))

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('user', userSchema)

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`,
        (err, data) => {
            next();
        })
    // console.log("Hello From your own middleware");
    // return res.json({msg:"Hello From middleware"})
    // req.myUserName = "DevBharadva"
    next();
})

app.use((req, res, next) => {
    // console.log("Hello From your secound middleware", req.myUserName);
    // return res.end("Hello");
    next();
})

// Routes (Rest API)
app.get("/api/users", async (req, res) => {
    const alldbusers = await User.find({})
    return res.json(alldbusers);
});

app.post('/api/users', async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are res..." });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    // console.log("result", result);

    return res.status(201).json({ msg: "success" })
});


app
.route('/api/users/:id')
.get(async (req,res)=>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User Not Found"})
    return res.json(user)
})
.patch(async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Devil"});
    res.json({status:"success"});
})
.delete(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({status:"success"})
})

// app.post('/api/users', (req, res) => {
//     const body = req.body;
//     users.push({id: users.length+1,...body});
//     fs.writeFile('./mock_data.json', JSON.stringify(users),(err,data)=>{
//             return res.json({ status: "success", });
//         });
// });

/* Delete method self */

// app.delete('/api/users/:id', (req, res) => {
//     const { id } = req.params;
//     const userIndex = users.findIndex(user => user.id === parseInt(id));

//     if (userIndex === -1) {
//         return res.status(404).json({ status: "error", message: "User not found" });
//     }

//     users.splice(userIndex, 1); // Remove user from the array

//     fs.writeFile('./mock_data.json', JSON.stringify(users), (err) => {
//         if (err) {
//             return res.status(500).json({ status: "error", message: "Could not update data" });
//         }
//         return res.json({ status: "success", message: "User deleted successfully" });
//     });
// });

// Routes
// app.get("/users", async (req, res) => {
//     // const alldbusers = await User.find({})
//     const html = `
//         <ul>
//         ${alldbusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `
//     res.send(html)
// })

app.listen(PORT, () => { console.log(`server Started at Port:${PORT}`) })