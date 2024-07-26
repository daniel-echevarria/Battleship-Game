import { LETTERS } from "./coordinateTranslation";

const log = (stuff) => {
  console.log(stuff);
};

export default function createBoardWithCoordinates(playerBoard) {
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");
  const numberedBoard = createNumberedBoard(playerBoard);
  addBoats(numberedBoard, playerBoard);
  const letterBand = createLetterBand();
  const numBand = createNumBand();
  boardWithCoordinates.append(numBand, numberedBoard, letterBand);
  return boardWithCoordinates;
}

const addBoats = (numberedBoard, playerBoard) => {
  const boats = playerBoard.getBoats();
  boats.forEach((boat) => displayBoat(boat, numberedBoard));
};

const displayBoat = (boat, board) => {
  const boatLength = boat.boat.getLength();
  const shipId = `ship-${boat.boat.getId()}`;

  const cellNum = translateCoordinatesToCellNum(boat.coordinates);
  const boatStart = cellNum;
  const boatEnd = parseInt(cellNum) + parseInt(boatLength);

  for (let i = boatStart; i < boatEnd; i++) {
    const cellEl = board.querySelector(`#cell-${i}`);
    cellEl.classList.add("boat", shipId);
  }
};

const translateCoordinatesToCellNum = (coordinate) => {
  const [letter, num] = coordinate.split("");
  const letterNum = LETTERS().indexOf(letter);
  const numNum = num - 1;
  const translatedCoordinate = [numNum, letterNum].join("");
  return translatedCoordinate;
};

const createNumberedBoard = (playerBoard) => {
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
  LETTERS().map((letter) => letterBand.append(createCoordinateCell(letter)));
  return letterBand;
};
