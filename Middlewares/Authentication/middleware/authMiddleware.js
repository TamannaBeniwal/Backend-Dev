import jwt from "jsonwebtoken";
import { verifyOTP } from "../utils/otpStore.js";

const SECRET = "mysecretkey";

// Middleware for protected routes
export const verifyMFA = (req, res, next) => {
    try {
        // 1️⃣ Check JWT
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;

        // 2️⃣ Check OTP (from headers or body)
        const otp = req.headers["x-otp"];

        if (!otp) {
            return res.status(401).json({ message: "OTP required" });
        }

        const isValid = verifyOTP(decoded.id, otp);

        if (!isValid) {
            return res.status(403).json({ message: "Invalid or expired OTP" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};