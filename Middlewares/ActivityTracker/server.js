import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/activityDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// 📝 Register User
app.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();

    res.json({ message: "User created" });
});


// 🔐 Login → update loginTime
app.post("/login", async (req, res) => {
    const { email } = req.body;

    const user = await User.findOneAndUpdate(
        { email },
        { loginTime: new Date() },
        { new: true }
    );

    res.json({
        message: "Login successful",
        user
    });
});


// 🚪 Logout → update logoutTime
app.post("/logout", async (req, res) => {
    const { email } = req.body;

    const user = await User.findOneAndUpdate(
        { email },
        { logoutTime: new Date() },
        { new: true }
    );

    res.json({
        message: "Logout successful",
        user
    });
});


// 👀 Any Activity → update lastActive automatically
app.get("/profile/:email", async (req, res) => {
    const user = await User.findOneAndUpdate(
        { email: req.params.email },
        {},
        { new: true }
    );

    res.json(user);
});