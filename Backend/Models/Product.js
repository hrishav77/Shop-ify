const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        
    },
    user_id:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("Product",productSchema)