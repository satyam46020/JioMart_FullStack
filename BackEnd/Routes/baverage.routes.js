const express=require("express")

const BaverageModel=require("../model/Baverage.model")

const baverage_Router=express.Router();

baverage_Router.get("/",async (req,res)=>{
    try {
        const product=await BaverageModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=baverage_Router

