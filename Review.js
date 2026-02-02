const fs=require("fs")
fs.readFile('./data.txt','utf-8',(data)=>{


if(err) throw err
    console.log(data);

})