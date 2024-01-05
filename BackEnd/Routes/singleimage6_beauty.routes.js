const express=require("express")

const Singleimage6_beautyModel=require("../model/Singleimage6_beauty.model")

const singleimage6_beauty_Router=express.Router();

singleimage6_beauty_Router.get("/",async (req,res)=>{
    try {
        const product=await Singleimage6_beautyModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=singleimage6_beauty_Router

