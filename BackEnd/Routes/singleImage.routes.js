const express=require("express")

const SingleimageModel=require("../model/SingleImage.model")

const singleimage_Router=express.Router();

singleimage_Router.get("/",async (req,res)=>{
    try {
        const product=await SingleimageModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage_Router

