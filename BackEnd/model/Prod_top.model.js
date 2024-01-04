const mongoose=require("mongoose")

const prod_top=mongoose.Schema({
    "id": Number,
    "img": String,
    "title": String,
    "Rs":Number,
    "Mrp": Number,
    "saving": Number
})


const Prod_topModel=mongoose.model("prod_top",prod_top)

module.exports=Prod_topModel