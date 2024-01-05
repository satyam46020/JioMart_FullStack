const express=require("express")

const Singleimage5_outfitModel=require("../model/Singleimage5_outfit.model")

const singleimage5_outfit_Router=express.Router();

singleimage5_outfit_Router.get("/",async (req,res)=>{
    try {
        const product=await Singleimage5_outfitModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage5_outfit_Router

