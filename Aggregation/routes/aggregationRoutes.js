import express from "express";
import {
  avgGpaByDepartment,
  mostPopularCourses,
  studentPerformance
} from "../controllers/aggregationController.js";

const router = express.Router();

router.get("/avg-gpa", avgGpaByDepartment);
router.get("/popular-courses", mostPopularCourses);
router.get("/performance", studentPerformance);

export default router;