const mongoose=require("mongoose")

const imagesslider1_shop=mongoose.Schema({
    "id": Number,
    "img":String,
})


const Imagesslider1_shopModel=mongoose.model("imagesslider1_shop",imagesslider1_shop)

module.exports=Imagesslider1_shopModel