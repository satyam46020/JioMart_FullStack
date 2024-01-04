const express=require("express")

const Imagesslider5_MakeupModel=require("../model/Imagesslider5_Makeup.model")

const imagesslider5_Makeup_Router=express.Router();

imagesslider5_Makeup_Router.get("/",async (req,res)=>{
    try {
        const product=await Imagesslider5_MakeupModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=imagesslider5_Makeup_Router

