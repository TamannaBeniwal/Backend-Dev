import express from "express";
const router=express.Router();

let validation =(req,res,next)=>{
    const token =req.query.token;
    if(token=="admin123"){
        next();
    }   else{
        return res.send("invalid token");
    }
  
}

router.use(validation);

router.get("/login",(req,res)=>{
    res.send("this is login route");
});

router.get("/signup",(req,res)=>{
    res.send("this is signup route");
});

export default router;