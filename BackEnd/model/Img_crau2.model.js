const mongoose=require("mongoose")

const img_crau2=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Img_crau2Model=mongoose.model("img_crau2",img_crau2)

module.exports=Img_crau2Model