import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:[20,"Name must contain 20 char only"]
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Float,
        min:[1,"price must be "]
    },
    stock:{
        type:Number,
        min:[0,"stock must be at least 0"]

    }

})

const product= mongoose.model("product",productSchema);

export default product; 