const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

const router = express.Router()

// get all users || get
router.get("/all-users", getAllUsers)

// register users || post
router.post("/register", registerController)

// login users || post
router.post("/login", loginController)


module.exports = router;