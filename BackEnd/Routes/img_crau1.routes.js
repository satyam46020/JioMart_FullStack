const express=require("express")

const Img_crau1Model=require("../model/Img_crau1.model")

const img_crau1_Router=express.Router();

img_crau1_Router.get("/",async (req,res)=>{
    try {
        const product=await Img_crau1Model.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=img_crau1_Router

