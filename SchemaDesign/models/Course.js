import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseCode: { type: String, unique: true },
  credits: Number,

  // prerequisites (self reference)
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

export default mongoose.model("Course", courseSchema);