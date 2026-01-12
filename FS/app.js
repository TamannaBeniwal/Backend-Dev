//read log file()
const fs=require("fs");


function readlogfile(){
    fs.readFile('./log.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
})
}






