const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const alldbusers = await User.find({})
    return res.json(alldbusers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User Not Found"})
    return res.json(user)
}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"Devil"});
    res.json({status:"success"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    res.json({status:"success"})
}

async function handleCreateNewUser(req,res){
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

    return res.status(201).json({ msg: "success", id: result._id})
}

module.export = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}