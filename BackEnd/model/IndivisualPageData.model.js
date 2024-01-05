const mongoose=require("mongoose")

const individualPageData=mongoose.Schema({
    "image":String,
    "id": Number,
    "name":String,
    "price":Number,
    "category":String
})


const IndividualPageDataModel=mongoose.model("individualPageData",individualPageData)

module.exports=IndividualPageDataModel