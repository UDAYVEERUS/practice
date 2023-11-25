const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectToMongo = require('./db')
connectToMongo()

const express = require('express')

const app = express()
app.use(express.json())

app.use("/user", require('./routes/users/route'))
app.use("/products", require("./routes/products/route"))

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
})