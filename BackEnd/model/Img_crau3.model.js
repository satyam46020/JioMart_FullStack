const mongoose=require("mongoose")

const img_crau3=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Img_crau3Model=mongoose.model("img_crau3",img_crau3)

module.exports=Img_crau3Model