const mongoose=require("mongoose")

const baverage=mongoose.Schema({
    "image": {type:String,required:true},
    "name": {type:String,required:true},
    "price":{type:Number,required:true},
    "category": {type:String,required:true}
})


const BaverageModel=mongoose.model("baverage",baverage)

module.exports=BaverageModel