const express=require("express")

const Imagesslider4_fashionModel=require("../model/Imagesslider4_fashion.model")

const imagesslider4_fashion_Router=express.Router();

imagesslider4_fashion_Router.get("/",async (req,res)=>{
    try {
        const product=await Imagesslider4_fashionModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider4_fashion_Router

