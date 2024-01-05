const express=require("express")

const IndividualPageDataModel=require("../model/IndivisualPageData.model")

const individualPageData_Router=express.Router();

individualPageData_Router.get("/",async (req,res)=>{
    try {
        const product=await IndividualPageDataModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=individualPageData_Router

