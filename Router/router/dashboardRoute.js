import express from "express";
const router=express.Router();

router.get("/profile",(req,res)=>{
    res.send("this is dashboard profile route");
});

router.get("/report",(req,res)=>{
    res.send("this is dashboard report route");
});

export default router;