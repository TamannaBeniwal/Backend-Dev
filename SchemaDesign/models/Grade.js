import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

export default mongoose.model("Grade", gradeSchema);