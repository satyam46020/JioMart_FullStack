const mongoose=require("mongoose")

const carousel=mongoose.Schema({
    "id": Number,
    "imgSrc": String,
    "title": String,
    "price":Number,
    "mrp": Number
})


const CarouselModel=mongoose.model("carousel",carousel)

module.exports=CarouselModel