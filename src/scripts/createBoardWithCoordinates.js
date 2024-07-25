const log = (stuff) => {
  console.log(stuff);
};

export default function createBoardWithCoordinates(playerBoard) {
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");
  const board = createBoard(playerBoard);
  const letterBand = createLetterBand();
  const numBand = createNumBand();
  boardWithCoordinates.append(numBand, board, letterBand);
  return boardWithCoordinates;
}

const createBoard = (playerBoard) => {
  const myBoard = document.createElement("div");
  myBoard.classList = "board";
  for (let i = 0; i < 100; i++) {
    myBoard.append(createBoardCell(i, playerBoard));
  }
  return myBoard;
};

const createBoardCell = (id, playerBoard) => {
  const cell = document.createElement("button");
  cell.classList.add("cell");
  cell.id = `cell-${id}`;
  cell.textContent = id;
  cell.addEventListener("click", function () {
    handleCellClick(cell, playerBoard);
  });
  return cell;
};

const handleCellClick = (cell, playerBoard) => {
  const classListArray = [...cell.classList];
  cell.classList.add("striked");
  cell.textContent = "X";
  if (classListArray.includes("boat")) {
    const boats = playerBoard.getBoats();
    const hitBoat = boats.find((boat) =>
      classListArray.includes(`ship-${boat.boat.getId()}`)
    );
    hitBoat.boat.hit();
    if (playerBoard.areAllBoatsSunk()) {
      log("game over!");
    }
  }
};

const createCoordinateCell = (text) => {
  const coordinate = document.createElement("div");
  coordinate.classList.add("coordinate");
  coordinate.textContent = text;
  return coordinate;
};

const createNumBand = () => {
  const numBand = document.createElement("div");
  numBand.classList.add("num-band");

  const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  numArray.map((num) => numBand.append(createCoordinateCell(num)));

  return numBand;
};

const createLetterBand = () => {
  const letterBand = document.createElement("div");
  letterBand.classList.add("letter-band");

  const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  letterArray.map((letter) => letterBand.append(createCoordinateCell(letter)));
  return letterBand;
};

export const letterArray = () => [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
];
