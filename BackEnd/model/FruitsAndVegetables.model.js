const mongoose=require("mongoose")

const fruitsAndVegetables=mongoose.Schema({
    "image": String,
    "id": Number,
    "name": String,
    "price":String,
    "category": String
})


const FruitsAndVegetablesModel=mongoose.model("fruitsAndVegetables",fruitsAndVegetables)

module.exports=FruitsAndVegetablesModel