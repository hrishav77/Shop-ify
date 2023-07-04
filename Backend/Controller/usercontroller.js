

const loginUser=async(req,res)=>{
   res.json({msg:"logged in"})

}

const signupUser=async(req,res)=>{
    res.json({msg:"sign up"})
   
    }

module.exports={loginUser,signupUser};