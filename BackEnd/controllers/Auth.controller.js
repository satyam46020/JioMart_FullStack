const asyncHandler = require("express-async-handler")
const Usermodel  = require("../model/User.model")
const {token} = require("../config/tokengenerator")
const bcrypt=require("bcrypt")

const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await Usermodel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
         res.status(200).json({
              _id: user._id,
              name:user.name,
              email: user.email,
              token: token(user._id)
         });
    } else {
         console.log('Entered Password:', password);
         console.log('User Password in DB:', user ? user.password : 'User not found');

         res.status(401).json({ msg: "Invalid Email and Password" });
    }
});

const signupController = asyncHandler(async(req, res) => {
    
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please enter all required fields.")
    }

    const existing = await Usermodel.findOne({ email })

    if(existing) {
        res.status(400)
        throw new Error("Email id already exists.")
    }

    const user = await Usermodel.create({ name, email, password })

    if(user) {
        res.status(200).json({
            _id: user._id,
            email: user.email,
            token: token(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Failed to register the user. Please try again.")
    }
})

module.exports = { loginController, signupController }