const mongoose=require("mongoose")

const singleimage6_beauty=mongoose.Schema({
    "id": Number,
    "img": String
})


const Singleimage6_beautyModel=mongoose.model("singleimage6_beauty",singleimage6_beauty)

module.exports=Singleimage6_beautyModel