import mongoose from "mongoose"

const studentdetails = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    rollno: Number
});

export default mongoose.model("student",studentdetails)
