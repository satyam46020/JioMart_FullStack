const mongoose=require("mongoose")

const imagesslider=mongoose.Schema({
    "id": Number,
    "img":String,
})


const ImagessliderModel=mongoose.model("imagesslider",imagesslider)

module.exports=ImagessliderModel