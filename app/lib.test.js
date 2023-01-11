import { it, expect } from "vitest";
import { getAllNamesFromRoster } from "./lib.js";

it("should return all names from roster", () => {
  const input = [{ name: "Jack" }, { name: "Jill" }, { name: "John" }];
  const expected = ["Jack", "Jill", "John"];

  const actual = getAllNamesFromRoster(input);

  expect(actual).toEqual(expected);
});
