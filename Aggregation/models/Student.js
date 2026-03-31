import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,   // IMPORTANT for aggregation
  gpa: Number
});

export default mongoose.model("Student", studentSchema);