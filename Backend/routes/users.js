const express=require('express')
const router=express.Router()
const {loginUser,signupUser}=require("../Controller/usercontroller")
const User=require("../Models/User")

//login
router.post("/login",loginUser)

//signup
router.post("/signup",signupUser)

module.exports=router;