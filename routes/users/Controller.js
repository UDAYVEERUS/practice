const { passwordGenerate, passwordValidate } = require('../../common/password')
const User = require('./userSchema')
const JWT_SECRET = "Udayveersecret!@123"
const jwt = require("jsonwebtoken")


const userPost = async (request, response, next) => {
    try {
        const { name, email, mobile, password } = request.body
        const passwordHash = await passwordGenerate(password)
        const user_response = await User.create({
            name, email, mobile, password: passwordHash

        })
        if (user_response) {

            request.user = user_response
            return response.status(201).json({
                message: "User Registered successfully",
                data: user_response,
                status: 201
            })
        }
        return response.status(402).json({

            message: "Unabl;e to register user",
            status: 402

        })
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            error: error,
            status: 500

        })
    }
}
const userPatch = async(req, res, next) => {
    try{
        const {name, email, mobile, password} = req.body
        const user_response = await User.findByIdAndUpdate(req.params.user_id,{
            name : name,
            email : email,
            mobile : mobile,
            password : password
        })
        if(user_response){
            return res.status(201).json({
                message : "User Updated successfully",
                data : user_response,
                status : 201
            })
        }
        return res.status(402).json({
            message : "unable to update user",
            status : 402,
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            data : err,
            status : 500
        })
    }
}
const usersFetch = async(req, res, next) => {
    try{
       
        const user_response = await User.find({})
        if(user_response){
            return res.status(201).json({
                message : "User Fetched successfully",
                data : user_response,
                status : 201
            })
        }
        return res.status(402).json({
            message : "unable to fetch user",
            status : 402,
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            data : err,
            status : 500
        })
    }
}
const Login = async(req, res, next) => {
    try{
        const {email, password} = req.body
        const user_response = await User.findOne({email :email})
        const passwordCompare = await passwordValidate(password, user_response.password)
        // console.log(passwordCompare,"97")
        if(!passwordCompare){
            return res.status(402).json({
                message : "Wrong Password",
                status : 402
            })
        }
        else{
            const data = {
                user : {
                    id : user_response._id
                }
            }
            const authToken = await jwt.sign(data, JWT_SECRET)
            return res.status(201).json({
                message : "Login Successfully",
                status : 201,
                token : `${authToken}`
            })
        }
    }catch(err){
        return res.status(500).json({
            message : "something went wrong",
            status : 500,
            daat : err
        })
    }
}
module.exports = {userPost, userPatch, usersFetch , Login}