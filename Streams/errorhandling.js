// const {error} = require("console");
// console.log("first");

// try{

//     throw new error("there is something wrong");
// }catch (error){
//     console.log(error)
// }

//console.log("end");



const http=require("http");
const server=http.createServer((req,res)=>{
    try{
        throw new Error("there is something wrong");
    }catch (error){
        console.log(error);
    }
    res.end("server is running");
})
server.listen(3000,()=>{
    console.log("server")
})