import express from "express";
import {
  addStudent,
  getAllStudents,
  getStudentByEmail,
  updateGPA,
  deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/students", addStudent);
router.get("/students", getAllStudents);
router.get("/students/:email", getStudentByEmail);
router.put("/students/:email", updateGPA);
router.delete("/students/:email", deleteStudent);

export default router;