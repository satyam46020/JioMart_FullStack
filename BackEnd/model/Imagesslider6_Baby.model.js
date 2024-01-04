const mongoose=require("mongoose")

const imagesslider6_Baby=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Imagesslider6_BabyModel=mongoose.model("imagesslider6_Baby",imagesslider6_Baby)

module.exports=Imagesslider6_BabyModel