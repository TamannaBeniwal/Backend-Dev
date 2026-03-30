import express from "express";
import {
  addStudent,
  addCourse,
  addProfessor,
  addGrade,
  getGrades
} from "../controllers/controller.js";

const router = express.Router();

router.post("/student", addStudent);
router.post("/course", addCourse);
router.post("/professor", addProfessor);
router.post("/grade", addGrade);

router.get("/grades", getGrades);

export default router;