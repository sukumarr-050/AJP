import mongoose from "mongoose"


const facultydetails= new mongoose.Schema({
    name: String,
    subject:String
});

export default mongoose.model("faculty",facultydetails)