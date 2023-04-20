const jwt = require('jsonwebtoken');
require('dotenv').config();

let SECRET = process.env.SECRETKEY;
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized User"
            })
        }
        token = token.split(' ')[1]
        let has_verified = jwt.verify(token, SECRET)
        if (!has_verified) {
            return res.status(401).json({
                message: "Unauthorized User"
            })
        }
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized User"
        })
    }
}
module.exports = auth;