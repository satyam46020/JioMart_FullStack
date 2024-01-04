const express=require("express")

const ImagessliderModel=require("../model/Imagesslider.model")

const imagesslider_Router=express.Router();

imagesslider_Router.get("/",async (req,res)=>{
    try {
        const product=await ImagessliderModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider_Router

