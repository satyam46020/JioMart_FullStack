const express=require("express")

const Imagesslider6_BabyModel=require("../model/Imagesslider6_Baby.model")

const imagesslider6_Baby_Router=express.Router();

imagesslider6_Baby_Router.get("/",async (req,res)=>{
    try {
        const product=await Imagesslider6_BabyModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider6_Baby_Router

