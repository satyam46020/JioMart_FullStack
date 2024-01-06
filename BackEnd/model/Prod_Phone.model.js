const mongoose=require("mongoose")

const prod_Phone=mongoose.Schema({
    "id": Number,
    "img": String,
    "title": String,
    "Rs":Number,
    "Mrp": Number,
    "save": Number
})


const Prod_PhoneModel=mongoose.model("prod_Phone",prod_Phone)

module.exports=Prod_PhoneModel