const mongoose=require("mongoose");
const StudentSchema=new  mongoose.Schema({
    name:String,
    age: Number,
    Course: String
});
module.exports=mongoose.model("student",(StudentSchema));