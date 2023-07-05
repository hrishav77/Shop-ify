const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})
userSchema.statics.signup=async function(email,password){ //this cant be a arrow function


const exist= await this.findOne({email})//here this means the model
if(exist){
    throw Error("email already in use")
}

const salt=await bcrypt.genSalt(10)//higher the number more time it will take for hacker but also signup becomes slow
const hash=await bcrypt.hash(password,salt)

const user=await this.create({email,password:hash})//this means the model
return user;
}

module.exports=mongoose.model("User",userSchema)