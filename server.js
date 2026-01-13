<<<<<<< HEAD
// const server = http.createServer((req,res)=>{

//   console.log("url "+ req.url)
//   console.log("Http method " + req.method)

//   res.writeHead(200,{
//     "content-type":"text/html",
//     "userinfo":"this is my user"
//   })

//   res.end("hello")

// })

// server.listen(3000,()=>{
//   console.log("server is running ")
// }) 


// send json data
// const server = http.createServer((req,res)=>{

//   let user = {
//     username:"tamanna",
//     email: "qwerty@gmail.com"
//   }

//   res.writeHead(200,{
//     "content-type":"application/json"
//   })

//   res.end(JSON.stringify({
//     sucess:"true",
//     user
//   }));

// })



//html bhejna with routing
const http = require('http');

const server = http.createServer((req, res) => {

    // HOME PAGE
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>Home Page</h1>
                    <p>Welcome to the Home page</p>
                </body>
            </html>
        `);
    }

    // ABOUT PAGE
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>About Page</h1>
                    <p>This is the About page</p>
                </body>
            </html>
        `);
    }

    // CONTACT PAGE
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>Contact Page</h1>
                    <p>This is the Contact page</p>
                </body>
            </html>
        `);
    }

    // 404 PAGE
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body>
                    <h1>404 - Page Not Found</h1>
                </body>
            </html>
        `);
    }

    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
=======
const{add,sub,mul,div}=require('./cal');
console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(div(10,0));
>>>>>>> cc4e7cd0acd48ea5b76306f22edaa8b3ed504833
