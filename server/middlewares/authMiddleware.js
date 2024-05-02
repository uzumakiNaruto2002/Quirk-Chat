const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const protect = async(req, res, next) => {
    let token
    // console.log(req.headers);rs
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // console.log("bello");
        token = req.headers.authorization.split(' ')[1]
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, No token')
    }
    try{
        jwt.verify(token, secret, async (err, info) => {
            if(err){
                return res.status(403).json({ message: "Invalid or expired token" });
            }
            const decode = jwt.verify(token, secret)
            req.user = decode
            next();
        })
    }
    catch(error){
        console.error("Error in fetching data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    protect
}