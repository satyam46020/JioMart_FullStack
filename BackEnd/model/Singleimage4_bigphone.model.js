const mongoose=require("mongoose")

const singleimage4_bigphone=mongoose.Schema({
    "id": Number,
    "img": String
})


const Singleimage4_bigphoneModel=mongoose.model("singleimage4_bigphone",singleimage4_bigphone)

module.exports=Singleimage4_bigphoneModel