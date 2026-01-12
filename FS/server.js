//fs module 
//import fs module

// const fs=require("fs");

// const read =(err,data)=>{
//     if(err) throw err
//     console.log(data)

// }



// fs.readFile('./log.txt','utf-8',read)

// console.log("first")

// fs.readFile('./log.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })



// const data=fs.readFileSync('./log.txt','utf-8');
// console.log(data)



//write file

// const data="this is a new data"
// fs.writeFile('./output.txt',data,(err)=>{
//     if(err) throw err
//     console.log("file write success")
// })


// fs.appendFile('./output.txt',"\n this is new data",(err)=>{
//     if(err) throw err
//     console.log("file append success")
// })


//delete file
// fs.unlinkSync('./output.txt')

// console.log("end")






//task
//readlogfile()
//write logfile("new log data")
//deletelogfile()





//path module

// const path=require("path");

//absolute path

// const absolutePath=path.resolve("./log.txt");

// console.log(absolutePath)
// console.log(__dirname)
// console.log(path.basename('./notes/log.txt')) //filename -log
// console.log(path.extname('./notes/log.txt')) //filename -.txt


// const joinPath=path.join(__dirname,"notes","log.txt");
// console.log(joinPath)

// const pathParse=path.parse(joinPath)
// console.log(pathParse)

//Api
const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("hello");
})
server.listen(3000,()=>{
    console.log("server running on port ",3000)
})

