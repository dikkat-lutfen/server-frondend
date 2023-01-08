const express = require('express')
const app = express()
const User = require ("./modules/userModule")
const Gallery = require ("./modules/galleryModule")
const port =3500;
const bodyParser = require('body-parser')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json())


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

app.post("/login", async (req,res)=>{
   // first we will check if the user exist
    const user = await User.findOne({username : req.body.username});
    // ıf user exist we should compare the password with bcrypt.compare method
    if(user){
        bcrypt.compare(req.body.password, user.password, function (err, result){
            if(result){
              const token =  jwt.sign({id: user.id},"secret_key", /*exparatin date*/ )
              res.send({token})
            }else{
                res.send({message:"wrong password"})
            }
        }) // first password in req.body second  password in database

    }else{
        res.send({message: "the user does not exist or wrong username"})
    }
})

app.post("/verify", async (req,res)=>{
    
})

app.listen(port,()=>{
    console.log("app is running port :"+ port)
    })