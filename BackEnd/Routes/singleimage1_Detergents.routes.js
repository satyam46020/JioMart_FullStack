const express=require("express")

const Singleimage1_DetergentsModel=require("../model/Singleimage1_Detergents.model")

const singleimage1_Detergents_Router=express.Router();

singleimage1_Detergents_Router.get("/",async (req,res)=>{
    try {
        const product=await Singleimage1_DetergentsModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage1_Detergents_Router

