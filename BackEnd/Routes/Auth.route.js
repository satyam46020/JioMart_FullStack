const express  = require("express")
const { signupController, loginController } = require("../controllers/Auth.controller")
const { createHash } = require("../middleware/hashing.middleware")

const authRouter = express.Router()

authRouter.post("/signup", createHash, signupController)

authRouter.post("/login", loginController)

module.exports = { authRouter }