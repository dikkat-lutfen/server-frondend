const express = require('express')
const app = express()
const port =3500;
const User = require ("/modules/userModule.js")
const Gallery = require ("/modules/galleryModule.js")
const bcrypt = require("bcrypt");



app.post("/signup", async (req,res)=>{
   if(!req.body.username || !req.body.password){
    res.send({message: "please write data needed "})
   }else{
     const user = await User.findOne({username: req.body.username})
     if(user){
        res.send({message: "the user already exist"})
     }else{
        bcrypt.hash(req.body.password, 10, async(err, hash)=> {
            if(hash){
                const newUser = new User ({username:req.body.username, password: hash})
                await newUser.save()
                res.send({message:"new user saved"})
            }else{
                console.log(err)
            }
        })
   }
   }
})

app.post("/signup", async (req,res)=>{
    
})

app.post("/signup", async (req,res)=>{
    
})

app.listen(port,()=>{
    console.log("app is running port :"+ port)
    })