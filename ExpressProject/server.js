// const express =require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.get("/user",(req,res)=>{
//     res.send("user route")
// })

// app.get("/userdetail",(req,res)=>{
//     //send json data
//     res.status(200).json({name:'tamanna'})
// })

// app.get("/about",(req,res)=>{
//     res.send("about route")
// })

// app.get("/contact",(req,res)=>{
//     res.send("contact route")
// })

// app.get("/help",(req,res)=>{
//     res.send("help route")
// })

// app.get("/data",(req,res)=>{
//     const data = {
//         id:1,  
//         name:"tamanna",
//     }
//     res.status(200).json(data)
// })

// app.get("/items",(req,res)=>{
//     const items = [
//         {id:1, name:"item1"},       
//         {id:2, name:"item2"},
//         {id:3, name:"item3"},
//     ]
//     res.status(200).json(items)
// })          

// app.get("/users/:id",(req,res)=>{
//     res.send(`get user id ${req.params.id}`);
// })

// app.get("/products/:category/:id",(req,res)=>{
//     res.send(`get product category ${req.params.category} and id ${req.params.id}`);

// })
// app.delete("/users/:id",(req,res)=>{
//     res.send(`delete user id ${req.params.id}`);
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })




///////////////////////////////


const express = require('express');
const app = express();
const userData=require('./data.js');
const port = 3000;
console.log(userData);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});



app.get("/userage",(req,res)=>{
  let userGreaterThan25 = userData.filter((ele)=>  ele.age >25)
  console.log(userGreaterThan25)
  res.json(userGreaterThan25);
})

app.get('/username', (req, res) => {
    let modifiedname = userData.map((ele) => {
        if (ele.gender === 'male') {
            return 'Mr.'+ ele.name;
        } 
        else if (user.gender === 'female') {
            return 'Ms.' +ele.name;
        }

    })
    res.json(modifiedname);
})


app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});


