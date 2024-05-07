const jwt = require("jsonwebtoken")
const sign = (payload, expiry = '7d') => {

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiry })
}

const verify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { sign, verify }