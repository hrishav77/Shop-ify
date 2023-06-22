const Product=require("../Models/Product")
const mongoose=require('mongoose')

//get from cart
const getProducts=async(req,res)=>{
    // const {id}=req.params
    // const products=await Product.find({id}).sort({createdAt:-1})
    // res.status(200).json(products)
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return  res.status(404).json({error:"no such product"})
    //  }
     const product=await Product.find({})
     if(!product){
         return res.status(404).json({error:"product does not exist"})
     }
     res.status(200).json(product)
}

//add to cart
const postProduct=async(req,res)=>{
    const {title,quantity,image,user_id}=req.body
    //add the goal to database
    try{
    // const user_id=req.user._id
    const product=await Product.create({title,quantity,image,user_id}) 
    res.status(200).json(product)
    }catch(error){
        res.status(400).json({error:error.message})
    }
  
}

//delete a item from cart
const deleteProduct=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({error:"no such product"})
     }
     const product=await Product.findOneAndDelete({_id:id})
     if(!product){
        return res.status(404).json({error:"product does not exist"})
    }
    res.status(200).json(product)
}






module.exports={getProducts,postProduct,deleteProduct}