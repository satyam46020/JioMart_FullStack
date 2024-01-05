const express=require("express")

const Img_crau2Model=require("../model/Img_crau2.model")

const img_crau2_Router=express.Router();

img_crau2_Router.get("/",async (req,res)=>{
    try {
        const product=await Img_crau2Model.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=img_crau2_Router

