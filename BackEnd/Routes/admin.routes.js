const express=require("express")

const AdminModel=require("../model/Admin.model")

const Admin_Router=express.Router();

Admin_Router.get("/",async (req,res)=>{
    try {
        const product=await AdminModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=Admin_Router

