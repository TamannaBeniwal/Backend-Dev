const express =require('express');
const app=express();
const userData=require('./data.js');
const port=3000;
console.log(userData);

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.get("/user/:id",(req,res)=>{
    console.log(req.params.id)
})

app.get("/user/:profile",(req,res)=>{
    res.send("this is user profile")
})
app.get("/user/page",(req,res)=>{
    // let name=req.query.name;
    // let size=req.query.size;
    // res.json({
    //     name,size
    // })
    const pagesize=req.query.pagesize;
    const limit=req.query.limit;
    res.json({
        pagesize,limit
    })
})

app.get()
app.listen(3000,()=>{
    console.log("server is running")
})

