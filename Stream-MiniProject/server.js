const http = require('http');
//step-1

//step-2
let data={
    name:"Tamanna",
    email:"tamannabeniwal007@gmail.com",
};
const server=http.createServer((req, res)=>{
    try {
        if (req.url==='/' && req.method==='GET'){
            res.end("server is running");
        } 
        else if(req.url==='/about' && req.method==='GET'){
            res.end("404 Page not Found");
        }
        //step-2
        else if(req.url==='/user' && req.method==='GET'){
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        } 
        else {
            res.end("404 Page is not Found");
        }
    } catch (error) {
        console.log(error.message);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});