import { expect, it } from "vitest";
import {
  getAllNamesFromRoster,
  getStudentById,
  getStudentGradeById,
  getStudentGradesByType,
} from "./lib.js";

it("should return all names from roster", () => {
  const input = [{ name: "Jack" }, { name: "Jill" }, { name: "John" }];
  const expected = ["Jack", "Jill", "John"];

  const actual = getAllNamesFromRoster(input);

  expect(actual).toEqual(expected);
});

it("should return student by id", () => {
  const rosterInput = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const id2FindInput = 3;

  const expected = { id: 3 };

  const actual = getStudentById(rosterInput, id2FindInput);

  expect(actual).toEqual(expected);
});

it("should find a specific grade for a specific student", () => {
  const inputRoster = [
    {
      id: 1,
      name: "Jack",
      grades: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 2,
      name: "Jill",
      grades: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
  ];
  const inputGradeId = 2;
  const inputStudentId = 1;
  const expected = { id: 2, name: "Jack" };

  const actual = getStudentGradeById({
    roster: inputRoster,
    gradeId: inputGradeId,
    studentId: inputStudentId,
  });

  expect(actual).toEqual(expected);
});

it("should find all grades of a specific type for a specific student", () => {
  const inputRoster = [
    {
      id: 1,
      name: "Jack",
      grades: [
        { id: 1, type: "HW" },
        { id: 2, type: "Test" },
        { id: 3, type: "HW" },
      ],
    },
    {
      id: 2,
      name: "Jill",
      grades: [
        { id: 1, type: "Quiz" },
        { id: 2, type: "Test" },
        { id: 3, type: "HW" },
      ],
    },
  ];
  const inputGradeType = "HW";
  const inputStudentId1 = 1;
  const inputStudentId2 = 2;

  const expected1 = {
    name: "Jack",
    grades: [
      { id: 1, type: "HW" },
      { id: 3, type: "HW" },
    ],
  };
  const expected2 = {
    name: "Jill",
    grades: [{ id: 3, type: "HW" }],
  };

  const actual1 = getStudentGradesByType({
    roster: inputRoster,
    gradeType: inputGradeType,
    studentId: inputStudentId1,
  });
  const actual2 = getStudentGradesByType({
    roster: inputRoster,
    gradeType: inputGradeType,
    studentId: inputStudentId2,
  });

  expect(actual1).toEqual(expected1);
  expect(actual2).toEqual(expected2);
});
