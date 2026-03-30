import express from "express";
import {
  getStudentsByGPA,
  getStudentsByCourses,
  getTopStudents,
  countStudentsByCity
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/gpa-range", getStudentsByGPA);
router.get("/more-courses", getStudentsByCourses);
router.get("/top-students", getTopStudents);
router.get("/count-by-city", countStudentsByCity);

export default router;