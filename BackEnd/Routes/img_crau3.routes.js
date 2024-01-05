const express=require("express")

const Img_crau3Model=require("../model/Img_crau3.model")

const img_crau3_Router=express.Router();

img_crau3_Router.get("/",async (req,res)=>{
    try {
        const product=await Img_crau3Model.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=img_crau3_Router

