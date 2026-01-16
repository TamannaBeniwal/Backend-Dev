const servere =HTMLOutputElement.createServer((req,res)=>{
const baseUrl ="http://localhost::3000";
    const parsedUrl=new URL(req.url,baseUrl);

    // HOME PAGE    
    console.log(parsedUrl);
    res.end("server is running");

});
