import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,

    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


// 🔥 MIDDLEWARE: Hide deleted documents in queries

// For find()
productSchema.pre("find", function (next) {
    this.where({ isDeleted: false });
    next();
});

// For findOne()
productSchema.pre("findOne", function (next) {
    this.where({ isDeleted: false });
    next();
});

// For findOneAndUpdate()
productSchema.pre("findOneAndUpdate", function (next) {
    this.where({ isDeleted: false });
    next();
});


// 🔥 SOFT DELETE METHOD
productSchema.methods.softDelete = function () {
    this.isDeleted = true;
    return this.save();
};

export default mongoose.model("Product", productSchema);