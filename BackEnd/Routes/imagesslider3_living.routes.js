const express=require("express")

const Imagesslider3_livingModel=require("../model/Imagesslider3_living.model")

const imagesslider3_living_Router=express.Router();

imagesslider3_living_Router.get("/",async (req,res)=>{
    try {
        const product=await Imagesslider3_livingModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider3_living_Router

