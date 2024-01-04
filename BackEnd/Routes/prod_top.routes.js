const express=require("express")

const Prod_topModel=require("../model/Prod_top.model")

const prod_top_Router=express.Router();

prod_top_Router.get("/",async (req,res)=>{
    try {
        const product=await Prod_topModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=prod_top_Router

