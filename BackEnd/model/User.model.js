const mongoose=require("mongoose")

const user=mongoose.Schema({
    // name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    // phone:{type:String,required:true}
})


const UserLoginModel=mongoose.model("user",user)

module.exports=UserLoginModel