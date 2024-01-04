const express=require("express")

const BeverageModel=require("../model/Baverage.model")

const beverage_Router=express.Router();

beverage_Router.get("/",async (req,res)=>{
    try {
        const product=await BeverageModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=beverage_Router

