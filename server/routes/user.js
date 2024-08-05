const express = require('express')
const router = express.Router();
const User  = require('../model/User')

router.post('/register', async(req,res)=>{
    const {username,email,password} = req.body;

    try{
        const user = new User({username,email,password});
        await user.save();

        res.status(200).send({message: 'User Registered Sucessfully'})     
    }catch(err){
        res.status(400).send({error: err.message})
    }
});


router.post('/login', async(req,res)=>{
      const{email,password}= req.body;
      try{
        const user= await  User.findOne({email});
        if(!user || !await(user.matchPassword(password))){ 
          res.status(401).send({message:'Invalid mail or Password'})
        }
        else{
            res.status(200).send({message:'Login SucessFul'})
        }
      } catch(err){

      }
})



