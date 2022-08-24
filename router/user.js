const bcrypt=require("bcryptjs");
const router= require("express").Router()
const UserModel=require('../model/usermodel')
const jwt=require("jsonwebtoken");
const usermodel = require("../model/usermodel");




router.get('/list',async (req,res)=>{
    try {
        const listingfind=await UserModel.find()
    res.json(listingfind)
    } catch (error) {
        res.send({message:error})
        
    }
})


router.post('/register',async(req,res)=>{

    const emailexist=await UserModel.findOne({email:req.body.email});
    if(emailexist) return res.send("email already exist !!")

    const salt=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(req.body.password,salt)

    const user=new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword
    })
    try {
        const saveduser=await user.save()
        res.send(saveduser)
    } catch (error) {
        res.json({message:error})
            }    
        })
        
    router.post('/login',async(req,res)=>{


          // checking email
          let email2=await UserModel.findOne({email:req.body.email})
          if(!email2) return res.send("email is not registered yet !")
    
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(req.body.password,salt)
    
        const user=new UserModel({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword
        })

       ////password checking
        const validpassword=await bcrypt.compare(req.body.password,user.password);
        if(!validpassword) return res.send("wrong password!!")
       //// create and assign a token 
            const token =jwt.sign({_id:user._id},process.env.TOKEN_SECRECT)
         res.header("auth-token",token).send({token:token})
    })

module.exports=router