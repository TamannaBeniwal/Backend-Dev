import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,

  // multiple departments
  departments: [String]
});

export default mongoose.model("Professor", professorSchema);