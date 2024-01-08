const bcrypt = require("bcrypt")
require("dotenv").config()
const createHash = async(req, res, next) => {
    const { password } = req.body

    req.body.password = await bcrypt.hash(password, 4)

    next()
}

module.exports = { createHash }