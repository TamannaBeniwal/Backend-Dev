const fs = require("fs");

fs.writeFile("input.txt", "hello this is nodejs file system" ,(err)=>{
    if (err) {
        console.log("error creating input file");
        return;
    }
})

fs.readFile("input.txt","utf8", (err, data)=>{
    if(err){
        console.log("error  reading file:" , err);
        return;
    }
    const words = data.trim().split(/\s+/);
    const wordCount = words.length;
    fs.writeFile("output.txt" , `Word Count: ${wordCount}`,(err)=>{
       if(err) {
        console.log("error writing file:",err);
       }else {
        console.log("Word count written successfully !");
       }
    });
});