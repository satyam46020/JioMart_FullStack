const mongoose=require("mongoose")

const img_crau4=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Img_crau4Model=mongoose.model("img_crau4",img_crau4)

module.exports=Img_crau4Model