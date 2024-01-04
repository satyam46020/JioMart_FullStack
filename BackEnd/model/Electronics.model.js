const mongoose=require("mongoose")

const electronics=mongoose.Schema({
    "image": String,
    "name": String,
    "id": Number,
    "price":String,
    "category": String
})


const ElectronicsModel=mongoose.model("electronics",electronics)

module.exports=ElectronicsModel