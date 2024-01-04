const express=require("express")

const FruitsAndVegetablesModel=require("../model/FruitsAndVegetables.model")

const fruitsAndVegetables_Router=express.Router();

fruitsAndVegetables_Router.get("/",async (req,res)=>{
    try {
        const product=await FruitsAndVegetablesModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=fruitsAndVegetables_Router

