const mongoose=require("mongoose")

const imagesslider4_fashion=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Imagesslider4_fashionModel=mongoose.model("imagesslider4_fashion",imagesslider4_fashion)

module.exports=Imagesslider4_fashionModel