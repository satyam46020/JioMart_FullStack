const express=require("express")

const ElectronicsModel=require("../model/Electronics.model")

const electronics_Router=express.Router();

electronics_Router.get("/",async (req,res)=>{
    try {
        const product=await ElectronicsModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=electronics_Router

