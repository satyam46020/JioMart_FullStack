const express=require("express")

const JioMartModel=require("../model/JioMart.model")

const jioMart_Router=express.Router();

jioMart_Router.get("/",async (req,res)=>{
    try {
        const product=await JioMartModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=jioMart_Router

