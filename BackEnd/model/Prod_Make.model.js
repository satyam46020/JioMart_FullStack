const mongoose=require("mongoose")

const prod_Make=mongoose.Schema({
    "id": Number,
    "img": String,
    "title": String,
    "Rs":Number,
    "Mrp": Number,
    "saving": Number
})


const Prod_MakeModel=mongoose.model("prod_Make",prod_Make)

module.exports=Prod_MakeModel