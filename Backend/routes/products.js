const express=require('express')
const router=express.Router()
const a=require("../Controller/productcontroller")

router.get("/:id",a.getProducts)
//add to cart
router.post("/",a.postProduct)

//delete
router.delete("/",a.deleteProduct)


module.exports=router;