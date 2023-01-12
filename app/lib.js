export const getAllNamesFromRoster = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudentGradeById = ({ roster, gradeId, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundGrade = foundStudent.grades.find((grade) => grade.id === gradeId);

  return { ...foundGrade, name: foundStudent.name };
};
