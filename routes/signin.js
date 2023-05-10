const express = require("express")
const router = express.Router()
const Model = require('../models/signup')

router.all((req,res, next)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
})
.post('/', async (req,res)=>{
    const {email, password} = req.body
    Model.findOne({email:email}, (err, user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "login success", user: user})

            }else {
                res.send({message: "invalid email or password, please try again"})
            }

        }
        else {res.send("not registered")
    }
    })
})
module.exports = router