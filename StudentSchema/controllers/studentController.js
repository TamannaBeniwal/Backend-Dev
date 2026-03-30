import Student from "../models/Student.js";

// 1. GPA between 3.0 and 3.5
export const getStudentsByGPA = async (req, res) => {
  try {
    const data = await Student.find({
      gpa: { $gte: 3.0, $lte: 3.5 }
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. More than 5 courses
export const getStudentsByCourses = async (req, res) => {
  try {
    const data = await Student.find({
      $expr: { $gt: [{ $size: "$courses" }, 5] }
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3. Top 10 students by GPA
export const getTopStudents = async (req, res) => {
  try {
    const data = await Student.find()
      .sort({ gpa: -1 })
      .limit(10);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4. Count students by city
export const countStudentsByCity = async (req, res) => {
  try {
    const data = await Student.aggregate([
      {
        $group: {
          _id: "$city",
          totalStudents: { $sum: 1 }
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};