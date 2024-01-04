const express=require("express")

const CartModel=require("../model//Cart.model")

const cart_Router=express.Router();

cart_Router.get("/",async (req,res)=>{
    try {
        const product=await CartModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=cart_Router

