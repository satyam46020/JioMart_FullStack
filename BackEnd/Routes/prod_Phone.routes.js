const express=require("express")

const prod_PhoneModel=require("../model/Prod_Phone.model")

const prod_Phone_Router=express.Router();

prod_Phone_Router.get("/",async (req,res)=>{
    try {
        const product=await prod_PhoneModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=prod_Phone_Router

