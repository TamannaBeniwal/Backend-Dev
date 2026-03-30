import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

connectDB();

app.use(express.json());

// routes
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});