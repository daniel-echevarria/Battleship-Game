import gameBoard from "./gameboard";

describe("placeBoat function adds a boat object with it's coordinates to the boats array", () => {
  describe("when calling placeBoard(1, a1)", () => {
    let myBoard;

    beforeAll(() => {
      myBoard = gameBoard();
      myBoard.placeBoat(1, ["a1"]);
    });

    test("boats array length returns 1", () => {
      expect(myBoard.getBoats().length).toBe(1);
    });

    test("boats[0].coordinates returns 'a1'", () => {
      expect(myBoard.getBoats()[0].coordinates).toEqual(["a1"]);
    });
  });
});

describe("receiveAttack(coordinates) calls hit on the boat if there is a boat or adds the coordinates to the missed shots", () => {
  test("getMissedShots includes b7 when there is no boat on b7", () => {
    const myBoard = gameBoard();
    myBoard.receiveAttack("B7");
    expect(myBoard.getMissedShots()).toContain("B7");
  });

  test("getMissedShots includes c6 when there is no boat on c6", () => {
    const myBoard = gameBoard();
    myBoard.receiveAttack("C6");
    expect(myBoard.getMissedShots()).toContain("C6");
  });

  test("getMissedShots includes d5 and h10 when there is no boat on these", () => {
    const myBoard = gameBoard();
    myBoard.receiveAttack("D5");
    myBoard.receiveAttack("H10");
    expect(myBoard.getMissedShots()).toEqual(
      expect.arrayContaining(["D5", "H10"])
    );
  });

  test("getMissedShots is empty if receiveAttach isn't called", () => {
    const myBoard = gameBoard();
    expect(myBoard.getMissedShots().length).toBe(0);
  });

  test("getMissedShots is empty if there is a boat on d4 and receiveAttach is called with d4", () => {
    const myBoard = gameBoard();
    myBoard.placeBoat(1, ["D4"]);
    myBoard.receiveAttack("D4");
    expect(myBoard.getMissedShots().length).toBe(0);
  });

  test("boat on e5's hitCount is 1 if received Attack on e5", () => {
    const myBoard = gameBoard();
    myBoard.placeBoat(1, ["E5"]);
    myBoard.receiveAttack("E5");
    const myBoat = myBoard.getBoats()[0].boat;
    expect(myBoat.getHitCount()).toBe(1);
  });
});

describe("areAllBoatsSunk returns true if all boats are sunk and false otherwise", () => {
  test("when only one boat is present and the boat is sunk it returns true", () => {
    const myBoard = gameBoard();
    myBoard.placeBoat(1, ["E5"]);
    myBoard.receiveAttack("E5");
    expect(myBoard.areAllBoatsSunk()).toBe(true);
  });

  test("when 2 boats are present and one is sunk it returns false", () => {
    const myBoard = gameBoard();
    myBoard.placeBoat(1, ["E5"]);
    myBoard.placeBoat(1, ["D3"]);
    myBoard.receiveAttack("E5");
    expect(myBoard.areAllBoatsSunk()).toBe(false);
  });
});
