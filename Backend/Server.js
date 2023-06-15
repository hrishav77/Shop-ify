require('dotenv').config()
const express=require('express')
const app=express()
const userRoutes=require('./routes/User')
const mongoose=require('mongoose')


// app.use(
//     cors({
//         origin:"*",
//     }
// ));
app.use(express.json())// this is used so that we can get the during from req.body when we post
app.use('/users',userRoutes)


app.get("/",(req,res)=>{
res.json({mssg:"welcome to the server"})
})

// connect to db
mongoose.connect(process.env.MONG_URL).then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log(" connected to db and server running on ",process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})

