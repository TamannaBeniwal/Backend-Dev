import express from "express";
import jwt from "jsonwebtoken";
import { setOTP } from "./utils/otpStore.js";
import { verifyMFA } from "./middleware/authMiddleware.js";

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// Dummy user
const user = {
    id: "user123",
    email: "test@gmail.com"
};


// 🔑 LOGIN ROUTE → Generate JWT
app.post("/login", (req, res) => {
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

    res.json({
        message: "Login successful",
        token
    });
});


// 🔢 GENERATE OTP
app.get("/generate-otp", (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    setOTP(user.id, otp);

    console.log("Generated OTP:", otp); // simulate sending SMS/email

    res.json({
        message: "OTP generated (check console)"
    });
});


// 🔒 PROTECTED ROUTE (MFA)
app.get("/secure-data", verifyMFA, (req, res) => {
    res.json({
        message: "You accessed secure data!",
        user: req.user
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});