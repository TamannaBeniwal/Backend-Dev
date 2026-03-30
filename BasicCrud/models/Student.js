import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gpa: {
    type: Number,
    default: 0
  }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;