const mongoose=require("mongoose")

const singleimage5_outfit=mongoose.Schema({
    "id": Number,
    "img": String
})


const Singleimage5_outfitModel=mongoose.model("singleimage5_outfit",singleimage5_outfit)

module.exports=Singleimage5_outfitModel