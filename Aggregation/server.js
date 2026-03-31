import express from "express";
import connectDB from "./config/db.js";
import aggregationRoutes from "./routes/aggregationRoutes.js";

const app = express();

connectDB();

app.use(express.json());

// routes
app.use("/api", aggregationRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});