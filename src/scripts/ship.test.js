import createShip from "./ship";

describe("calling hit() on ship rises ship's hit_count", () => {
  test("rise from 0 to 1", () => {
    const myShip = createShip();
    myShip.hit();
    expect(myShip.getHitCount()).toEqual(1);
  });

  test("rise from 0 to 2", () => {
    const myShip = createShip();
    myShip.hit();
    myShip.hit();
    expect(myShip.getHitCount()).toEqual(2);
  });
});

describe("isSunk function returns true if ship's hit_count equals ship's length and false otherwise", () => {
  it("returns true when ship's length is 1 and hit_count is 1", () => {
    const myShip = createShip(1);
    myShip.setHitCount(1);
    expect(myShip.isSunk()).toBe(true);
  });

  it("returns false when ship's length is 1 and hit_count is 0", () => {
    const myShip = createShip(1);
    myShip.setHitCount(0);
    expect(myShip.isSunk()).toBe(false);
  });

  it("returns false when ship's length is 2 and hit_count is 1", () => {
    const myShip = createShip(2);
    myShip.setHitCount(1);
    expect(myShip.isSunk()).toBe(false);
  });

  it("returns true when ship's length is 4 and hit_count is 4", () => {
    const myShip = createShip(4);
    myShip.setHitCount(4);
    expect(myShip.isSunk()).toBe(true);
  });
});
