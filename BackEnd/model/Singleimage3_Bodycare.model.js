const mongoose=require("mongoose")

const singleimage3_Bodycare=mongoose.Schema({
    "id": Number,
    "img": String
})


const Singleimage3_BodycareModel=mongoose.model("singleimage3_Bodycare",singleimage3_Bodycare)

module.exports=Singleimage3_BodycareModel