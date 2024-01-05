const mongoose=require("mongoose")

const jioMart=mongoose.Schema({
    "id": Number,
    "title":String,
    "content":String
})


const JioMartModel=mongoose.model("jioMart",jioMart)

module.exports=JioMartModel