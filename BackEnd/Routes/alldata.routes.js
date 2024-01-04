const express=require("express")

const AlldataModel=require("../model/Alldata.model")

const alldata_Router=express.Router();

alldata_Router.get("/",async (req,res)=>{
    try {
        const product=await AlldataModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=alldata_Router

