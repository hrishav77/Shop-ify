const Product=require("../Models/Product")
const mongoose=require('mongoose')

//get from cart
const getProducts=async(req,res)=>{

     const product=await Product.find({})
     if(!product){
         return res.status(404).json({error:"product does not exist"})
     }
     res.status(200).json(product)
}

const getProductsbyid = async (req, res) => {
    const { id} = req.params;
  
    try {
      const products = await Product.findById(id);
  
      if (!products || products.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  const getProductsbyprodid = async (req, res) => {
    const {id} = req.params;
  
    try {
      const products = await Product.find({user_id:id});
  
      if (!products || products.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

//add to cart
const postProduct=async(req,res)=>{
    const {title,quantity,image,user_id,cost}=req.body
    //add the goal to database
    try{
    // const user_id=req.user._id
    const product=await Product.create({title,quantity,image,user_id,cost}) 
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
const updateProduct=async(req,res)=>{
    const {id}=req.params;
    const updatedQuantity = req.body.quantity;
    try{
     const product=await Product.findOneAndUpdate({user_id:id},{quantity:updatedQuantity})
     if(!product){
        return res.status(404).json({error:"product does not exist"})
    }
    res.status(200).json(product)}
    catch(error){
        res.status(400).json({error:error.message})
    }
}






module.exports={getProducts,postProduct,deleteProduct,updateProduct,getProductsbyid,getProductsbyprodid}