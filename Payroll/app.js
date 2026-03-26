const express = require("express");
const logger = require("./middlewares/logger");
const methodOverride = require("method-override");

const app = express();

// View Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(logger);

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/", employeeRoutes);

// Error Middleware 
const errorHandler = require("./middlewares/errorMiddleware");
app.use(errorHandler);

// Server
app.listen(5000, () => console.log("Server Running on http://localhost:5000"));