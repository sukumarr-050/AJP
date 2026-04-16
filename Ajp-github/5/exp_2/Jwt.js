const express = require("express");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
const PORT=5000;
const SECRET_KEY="mysecretKey";

//EXAMPLE USER
const user={
    id:1,
    UserName:"Sukumar",
    Password:"4321",
};

//Login Routeee

app.post("/login",(req,res)=>{
    const{UserName,Password} = req.body;
    if(UserName==user.UserName && Password==user.Password){
        const token = jwt.sign({id:user.id,UserName:user.UserName},SECRET_KEY,{expiresIn : "1h"});
        return res.json({token});
    res.status(401).json({message:"Invalid credits"});
    }
});

    //Middleware

    function verifyToken(req,res,next){
        const authHeader=req.headers["authorization"];
        if(!authHeader){
            return res.status(401).json({message:'token missing'});
        }
        const token=authHeader.split(" ")[1];

        jwt.verify(token,SECRET_KEY,(err,decode)=>{
            if(err){
                return res.status(403).json({message:'Invalid token'});
            }
            req.user=decode;
            next();
        });
    }

    // projected route
    app.get('/profile',verifyToken,(req,res)=>{
        res.json({
            message:"Welcome to profile",
            user:req.user,
        });
        });
app.listen(PORT,()=>console.log(`Server running on ${PORT}`));
