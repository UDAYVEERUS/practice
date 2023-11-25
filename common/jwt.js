const jsonwebtoken = require('jsonwebtoken')
const JWT_SECRET = "Udayveersecret!@123"


const verifyJwt = async(req, res, next) => {
    const token = req.header("authorization")
    if(!token){
        return res.status(402).json({
            message : "No JWT Provided",
            status : 401
        })
    }
    try{
        const validate = await jwt.verify(token, JWT_SECRET)
        if(validate){
            req.jwt_data = validate
            return next()
        }
        return res.status(402).json({
            message : "Invalid jwt",
            status : 402
        })
    }catch(err){
        return res.status(500).json({
            message : "Something went wrong",
            data : err
        })
    }
}

module.exports = verifyJwt