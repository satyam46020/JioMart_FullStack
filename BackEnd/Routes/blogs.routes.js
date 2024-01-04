const express=require("express")

const BlogsModel=require("../model/Blogs.model")

const blogs_Router=express.Router();

blogs_Router.get("/",async (req,res)=>{
    try {
        const product=await BlogsModel.find();
        res.send(product)
    } catch (error) {
        res.send({msg:"Error getting product"})
    }
})

module.exports=blogs_Router

