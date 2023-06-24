const express=require('express')
const router=express.Router()
const a=require("../Controller/productcontroller")

router.get("/",a.getProducts)
//add to cart
router.post("/",a.postProduct)

//delete
router.delete("/:id",a.deleteProduct)


module.exports=router;