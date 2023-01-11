import apiService from "./api.service.js";

const gradesData = await apiService.getGradesData();

console.log(gradesData);
