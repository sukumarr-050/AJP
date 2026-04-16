const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const facultyRoutes = require("./routes/facultyRoutes");

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/facultyDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Routes
app.use("/api", facultyRoutes);

// Server
app.listen(4000, ()=>{
    console.log("Faculty Server running on port 4000");
=======
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const studentRoutes=require("./routes/studentRoutes");
const app=express();
app.use(bodyParser.json());
//MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
//Routes
app.use("/api",studentRoutes);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
