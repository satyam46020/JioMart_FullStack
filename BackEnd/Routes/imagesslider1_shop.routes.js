const express=require("express")

const Imagesslider1_shopModel=require("../model/Imagesslider1_shop.model")

const imagesslider1_shop_Router=express.Router();

imagesslider1_shop_Router.get("/",async (req,res)=>{
    try {
        const product=await Imagesslider1_shopModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider1_shop_Router

