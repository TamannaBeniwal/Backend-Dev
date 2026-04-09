import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,

    loginTime: Date,
    logoutTime: Date,
    lastActive: Date
});

export default mongoose.model("User", userSchema);