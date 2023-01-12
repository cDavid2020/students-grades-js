import apiService from "./api.service.js";
import { addGrade } from "./lib.js";

const gradesData = await apiService.getGradesData();

// Update Student #1 to add a new grade
const updatedStudent = addGrade({
  roster: gradesData,
  gradeType: "HW",
  score: 100,
  studentId: 1,
});

apiService.updateStudent(1, updatedStudent);
