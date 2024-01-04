const mongoose=require("mongoose")

const blogs=mongoose.Schema({
    "username": String,
    "title": String,
    "content":String,
    "category": String,
    "date":String,
    "likes": Number,
    "comments":Array,
    "id": Number,
})


const BlogsModel=mongoose.model("blogs",blogs)

module.exports=BlogsModel