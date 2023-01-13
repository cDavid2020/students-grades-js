export const getAllNamesFromRoster = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudentGradeById = ({ roster, gradeId, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundGrade = foundStudent.grades.find((grade) => grade.id === gradeId);

  return { ...foundGrade, name: foundStudent.name };
};

export const getStudentGradesByType = ({ roster, gradeType, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);

  const foundStudentGrades = foundStudent.grades.filter(
    (grade) => grade.type === gradeType
  );

  return { grades: foundStudentGrades, name: foundStudent.name };
};

export const addGrade = ({ roster, gradeType, score, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundStudentCurrentGrades = foundStudent.grades;

  const newGrade = {
    type: gradeType,
    score,
  };

  const newStudentGrades = [...foundStudentCurrentGrades, newGrade];

  return {
    ...foundStudent,
    grades: newStudentGrades,
  };
};

export const updateGrade = ({ roster, gradeId, updatedScore, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);

  const updatedGrades = foundStudent.grades.map((grade) => {
    // If it's the grade we're looking for, update the score
    if (grade.id === gradeId) {
      return {
        ...grade,
        score: updatedScore,
      };
    }

    // Otherwise, return the grade as is
    return grade;
  });

  // Mutation is okay here because we're not mutating the original object
  // It is contained within the function body exclusively
  // 'foundStudent' is a LOCALLY SCOPED VARIABLE that is only available within this function
  foundStudent.grades = [...updatedGrades];

  // Just send back the updated student (not the entire roster)
  return foundStudent;
};

export const deleteGrade = ({ roster, gradeId, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);

  // Filter out the grade we want to delete
  const gradesWithoutDeletedGrade = foundStudent.grades.filter(
    // If the grade's id is NOT the gradeId we're looking for, keep it
    (grade) => grade.id !== gradeId
  );

  foundStudent.grades = [...gradesWithoutDeletedGrade];

  return foundStudent;
};
