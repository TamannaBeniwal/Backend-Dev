import Student from "../models/Student.js";
import Grade from "../models/Grade.js";

// 1. Average GPA by Department
export const avgGpaByDepartment = async (req, res) => {
  try {
    const data = await Student.aggregate([
      {
        $group: {
          _id: "$department",
          avgGPA: { $avg: "$gpa" }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 2. Most Popular Courses
export const mostPopularCourses = async (req, res) => {
  try {
    const data = await Grade.aggregate([
      {
        $group: {
          _id: "$course",
          totalStudents: { $sum: 1 }
        }
      },
      {
        $sort: { totalStudents: -1 }
      },
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "_id",
          as: "courseDetails"
        }
      },
      { $unwind: "$courseDetails" }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 3. Student Performance Report
export const studentPerformance = async (req, res) => {
  try {
    const data = await Grade.aggregate([
      {
        $lookup: {
          from: "students",
          localField: "student",
          foreignField: "_id",
          as: "student"
        }
      },
      { $unwind: "$student" },

      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "course"
        }
      },
      { $unwind: "$course" },

      {
        $group: {
          _id: "$student._id",
          name: { $first: "$student.name" },
          department: { $first: "$student.department" },
          courses: {
            $push: {
              course: "$course.courseName",
              grade: "$grade"
            }
          }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};