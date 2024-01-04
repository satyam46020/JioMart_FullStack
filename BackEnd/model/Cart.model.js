const mongoose=require("mongoose")

const cart=mongoose.Schema({
    "image": String,
    "id": Number,
    "name":String,
    "category": String,
    "url":String,
    "price": Number,
    "brand":String,
    "rating":String,
    "pattern": String,
    "fabric":String,
    "color":String,
    "delivery": Number,
})


const CartModel=mongoose.model("cart",cart)

module.exports=CartModel