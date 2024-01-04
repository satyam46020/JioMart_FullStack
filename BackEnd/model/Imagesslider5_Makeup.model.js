const mongoose=require("mongoose")

const imagesslider5_Makeup=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Imagesslider5_MakeupModel=mongoose.model("imagesslider5_Makeup",imagesslider5_Makeup)

module.exports=Imagesslider5_MakeupModel