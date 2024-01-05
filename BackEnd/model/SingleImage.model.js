const mongoose=require("mongoose")

const singleimage=mongoose.Schema({
    "id": Number,
    "img": String
})


const SingleimageModel=mongoose.model("singleimage",singleimage)

module.exports=SingleimageModel