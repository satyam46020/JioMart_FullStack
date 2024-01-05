const express=require("express")

const Singleimage4_bigphoneModel=require("../model/Singleimage4_bigphone.model")

const singleimage4_bigphone_Router=express.Router();

singleimage4_bigphone_Router.get("/",async (req,res)=>{
    try {
        const product=await Singleimage4_bigphoneModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage4_bigphone_Router

