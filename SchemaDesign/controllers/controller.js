import Student from "../models/Student.js";
import Course from "../models/Course.js";
import Professor from "../models/Professor.js";
import Grade from "../models/Grade.js";

// Add Student
export const addStudent = async (req, res) => {
  const data = await Student.create(req.body);
  res.json(data);
};

// Add Course
export const addCourse = async (req, res) => {
  const data = await Course.create(req.body);
  res.json(data);
};

// Add Professor
export const addProfessor = async (req, res) => {
  const data = await Professor.create(req.body);
  res.json(data);
};

// Add Grade
export const addGrade = async (req, res) => {
  const data = await Grade.create(req.body);
  res.json(data);
};

// Get Grades with populated data
export const getGrades = async (req, res) => {
  const data = await Grade.find()
    .populate("student")
    .populate("course");

  res.json(data);
};