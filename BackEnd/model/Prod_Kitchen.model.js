const mongoose=require("mongoose")

const prod_Kitchen=mongoose.Schema({
    "id": Number,
    "img": String,
    "title": String,
    "Rs":Number,
    "Mrp": Number,
    "save": Number
})


const Prod_KitchenModel=mongoose.model("prod_Kitchen",prod_Kitchen)

module.exports=Prod_KitchenModel