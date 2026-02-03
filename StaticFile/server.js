import express from "express";
const port=4000;
const app=express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Server is running");
});

app.listen(port,()=>{
    console.log("server is running on port "+port);
})