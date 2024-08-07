
const express = require('express');
const { connectMongoDB } = require('./conections')

const {logReqRes} = require('./middlewares')

const userRouter = require('./routes/user')

const app = express();
const PORT = 2020;

//conections
connectMongoDB(' mongodb://127.0.0.1:27017/project1')

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt "))

// Routes

app.use('/user', userRouter)

app.listen(PORT, () => { console.log(`server Started at Port:${PORT}`) })