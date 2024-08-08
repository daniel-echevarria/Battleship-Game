import generateBoatCoordinates from "./generateBoatCoordinates";

describe("when given a length an initial and a direction number generateBoardCoordinates returns an array with consecutives squares", () => {
  test("when passed 3 and 43 it returns [43, 44, 45]", () => {
    expect(generateBoatCoordinates(3, 43)).toEqual([43, 44, 45]);
  });

  test("when passed 2 and 3 it returns [3, 4]", () => {
    expect(generateBoatCoordinates(2, 3)).toEqual([3, 4]);
  });

  test("when passed 5 and 10 it returns [10, 11, 12, 13, 14]", () => {
    expect(generateBoatCoordinates(5, 10)).toEqual([10, 11, 12, 13, 14]);
  });

  test("when passed 2 and 10 it returns [10, 20]", () => {
    expect(generateBoatCoordinates(2, 10, "vertical")).toEqual([10, 20]);
  });
});
