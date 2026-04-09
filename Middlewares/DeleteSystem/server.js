import express from "express";
import mongoose from "mongoose";
import Product from "./models/Product.js";

const app = express();
app.use(express.json());


// 🔌 MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/softDeleteDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// 📝 Create Product
app.post("/product", async (req, res) => {
    const product = new Product(req.body);
    await product.save();

    res.json({ message: "Product created", product });
});


// 📄 Get All Products (Deleted auto-hidden)
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});


// 🔍 Get Single Product
app.get("/product/:id", async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
});


// ✏️ Update Product
app.put("/product/:id", async (req, res) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    );

    res.json(product);
});


// 🗑️ Soft Delete Product
app.delete("/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Not found" });
    }

    await product.softDelete();

    res.json({ message: "Product soft deleted" });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});