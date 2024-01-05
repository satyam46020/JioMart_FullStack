const express=require("express")

const Prod_DairyModel=require("../model/Prod_Dairy.model")

const prod_Dairy_Router=express.Router();

prod_Dairy_Router.get("/",async (req,res)=>{
    try {
        const product=await Prod_DairyModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=prod_Dairy_Router

