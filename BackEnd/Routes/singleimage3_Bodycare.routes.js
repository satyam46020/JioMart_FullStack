const express=require("express")

const Singleimage3_BodycareModel=require("../model/Singleimage3_Bodycare.model")

const singleimage3_Bodycare_Router=express.Router();

singleimage3_Bodycare_Router.get("/",async (req,res)=>{
    try {
        const product=await Singleimage3_BodycareModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage3_Bodycare_Router

