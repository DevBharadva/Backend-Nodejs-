const express = require('express');
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} = require('../controllers/user')
const router = express.Router();

// router.get("/", async (req, res) => {
//     // const alldbusers = await User.find({})
//     const html = `
//         <ul>
//         ${alldbusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `
//     res.send(html)
// })

// router.get("/", handleGetAllUsers);

router.route('/').get(handleGetAllUsers).post(handleCreateNewUser)

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

// router.post('/', handleCreateNewUser);

module.exports = router;