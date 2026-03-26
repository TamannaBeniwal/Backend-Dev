import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connection done");
    } catch (error) {
        console.error("connection fail", error);
    }
}

export default connectDb;