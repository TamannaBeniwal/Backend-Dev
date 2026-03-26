import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[25,"Name must be at most 25 characters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        minLength:[8,"Password must be at least 8 characters"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})
const user= mongoose.model("User",userSchema);

export default user;