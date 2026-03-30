import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(express.json());

connectDB();
app.use("/api", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});