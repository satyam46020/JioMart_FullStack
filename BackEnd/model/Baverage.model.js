const mongoose=require("mongoose")

const beverage=mongoose.Schema({
    "image": {type:String,required:true},
    "name": {type:String,required:true},
    "price":{type:Number,required:true},
    "category": {type:String,required:true}
})


const BeverageModel=mongoose.model("beverage",beverage)

module.exports=BeverageModel