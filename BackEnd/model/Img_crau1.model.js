const mongoose=require("mongoose")

const img_crau1=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Img_crau1Model=mongoose.model("img_crau1",img_crau1)

module.exports=Img_crau1Model