const mongoose=require("mongoose")

const imagesslider3_living=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Imagesslider3_livingModel=mongoose.model("imagesslider3_living",imagesslider3_living)

module.exports=Imagesslider3_livingModel