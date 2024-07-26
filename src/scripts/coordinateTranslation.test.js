import {
  translateCoordinatesToCellNum,
  translateCellNumToCoordinate,
} from "./coordinateTranslation";

describe(" translateCoordinatesToCellNum turns a 'letter + num' coordinate into a cell num", () => {
  test("a1 returns 0", () => {
    expect(translateCoordinatesToCellNum("A1")).toBe(0);
  });
  test("j10 returns 99", () => {
    expect(translateCoordinatesToCellNum("J10")).toBe(99);
  });
  test("h7 returns 67", () => {
    expect(translateCoordinatesToCellNum("H7")).toBe(67);
  });
});

describe("translateCellNumToCoordinate turns a cellNum to a coordinate", () => {
  test("0 returns a1", () => {
    expect(translateCellNumToCoordinate("0")).toBe("A1");
  });
  test("99 returns j10", () => {
    expect(translateCellNumToCoordinate("99")).toBe("J10");
  });
});
