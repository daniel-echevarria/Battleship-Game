import player from "./player";
import _ from "lodash";

const log = (stuff) => {
  console.log(stuff);
};

export default function gameDisplay() {
  const player1 = player();
  const player2 = player();

  const board1 = player1.getPlayerBoard();
  log(board1);

  const coolBoard = createBoardWithCoordinates();
  return coolBoard;
}

const createBoardWithCoordinates = () => {
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");
  const board = createBoard();
  const letterBand = createLetterBand();
  const numBand = createNumBand();
  boardWithCoordinates.append(numBand, board, letterBand);
  return boardWithCoordinates;
};

const createBoard = () => {
  const myBoard = document.createElement("div");
  myBoard.classList = "board";
  for (let i = 1; i <= 100; i++) {
    myBoard.append(createBoardCell(i));
  }
  return myBoard;
};

const createBoardCell = (id) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = id;
  cell.textContent = id;
  return cell;
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
