const mongoose = require('mongoose')
const dotenv=require('dotenv').config()
const URL=process.env.DATABASE_URL
const connectToMongo = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("Database connected successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToMongo