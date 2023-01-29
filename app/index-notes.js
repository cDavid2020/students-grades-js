import apiService from "./api.service.js";
import { updateGrade } from "./lib.js";

const gradesData = await apiService.getGradesData();

// Update the first student's first grade to a 80
const updatedStudent = updateGrade({
  roster: gradesData,
  gradeId: 1,
  updatedScore: 80,
  studentId: 1,
});

apiService.updateStudent(1, updatedStudent);
