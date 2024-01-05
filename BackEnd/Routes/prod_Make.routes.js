const express=require("express")

const Prod_MakeModel=require("../model/Prod_Make.model")

const prod_Make_Router=express.Router();

prod_Make_Router.get("/",async (req,res)=>{
    try {
        const product=await Prod_MakeModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=prod_Make_Router

