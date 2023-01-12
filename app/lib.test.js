import { expect, it } from "vitest";
import {
  getAllNamesFromRoster,
  getStudentById,
  getStudentGradeById,
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
