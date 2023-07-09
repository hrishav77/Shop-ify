const express=require('express')
const router=express.Router()
const a=require("../Controller/productcontroller")
const requireAuth = require('../middlewares/requireAuth')

router.use(requireAuth)
router.get("/",a.getProducts)
//add to cart
router.get("/:id",a.getProductsbyid)
router.get("/productid/:id",a.getProductsbyprodid)

router.post("/",a.postProduct)

//delete
router.delete("/:id",a.deleteProduct)
router.put("/:id",a.updateProduct)

module.exports=router;