const mongoose=require("mongoose")

const singleimage1_Detergents=mongoose.Schema({
    "id": Number,
    "img": String
})


const Singleimage1_DetergentsModel=mongoose.model("singleimage1_Detergents",singleimage1_Detergents)

module.exports=Singleimage1_DetergentsModel