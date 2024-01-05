const express=require("express")

const Img_crau4Model=require("../model/Img_crau4.model")

const img_crau4_Router=express.Router();

img_crau4_Router.get("/",async (req,res)=>{
    try {
        const product=await Img_crau4Model.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=img_crau4_Router

