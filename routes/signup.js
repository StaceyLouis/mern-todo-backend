const express = require("express")
const router = express.Router()
const Model = require('../models/signup')

router.all((req,res, next)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
})
.post("/", (req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}) 