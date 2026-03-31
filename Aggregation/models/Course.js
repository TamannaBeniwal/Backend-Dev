import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: String,
  courseCode: String
});

export default mongoose.model("Course", courseSchema);