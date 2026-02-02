import express from "express";

import userRoute from "../Backend/Router/router/userRoute.js";
import registerRoute from "../Backend/Router/router/registerRoute.js";
import dashboardRoute from "../Backend/Router/router/dashboardRoute.js";


const port=3000;
const app=express();

app.use("/api",userRoute)
app.use("/api",registerRoute)
app.use("/api",dashboardRoute)

app.listen(port,()=>{
    console.log("server is running on port "+port);
});