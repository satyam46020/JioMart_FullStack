const mongoose=require("mongoose")

const alldata=mongoose.Schema({
    "image": {type:String,required:true},
    "id": {type:Number,required:true},
    "name": {type:String,required:true},
    "price":{type:Number,required:true},
    "category": {type:String,required:true}
})


const AlldataModel=mongoose.model("alldata",alldata)

module.exports=AlldataModel