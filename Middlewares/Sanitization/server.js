import express from "express";
import { sanitizeMiddleware } from "./middleware/sanitize.js";

const app = express();
app.use(express.json());

// 🔥 Apply globally
app.use(sanitizeMiddleware);


// 📝 Example route
app.post("/user", (req, res) => {
    res.json({
        message: "Data received safely",
        data: req.body
    });
});


// 🔍 Query example
app.get("/search", (req, res) => {
    res.json({
        query: req.query
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});