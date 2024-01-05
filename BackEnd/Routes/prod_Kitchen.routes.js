const express=require("express")

const Prod_KitchenModel=require("../model/Prod_Kitchen.model")

const prod_Kitchen_Router=express.Router();

prod_Kitchen_Router.get("/",async (req,res)=>{
    try {
        const product=await Prod_KitchenModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=prod_Kitchen_Router

