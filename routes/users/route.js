const express = require('express')
const {userPost, userPatch, usersFetch, Login} = require('./Controller')


const router = express.Router()

router.post("/registration", userPost)
router.get('/get', usersFetch)
router.patch("/update/:user_id", userPatch)
router.post("/login", Login)


module.exports = router