const express=require("express")

const CarouselModel=require("../model//Carousel_idvPage.model")

const carousel_Router=express.Router();

carousel_Router.get("/",async (req,res)=>{
    try {
        const product=await CarouselModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=carousel_Router

