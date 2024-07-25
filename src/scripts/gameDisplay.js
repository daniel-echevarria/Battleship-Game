import player from "./player";
import createBoardWithCoordinates from "./createBoardWithCoordinates";
import { letterArray } from "./createBoardWithCoordinates";
import _ from "lodash";

const log = (stuff) => {
  console.log(stuff);
};

export default function gameDisplay() {
  const player1 = player();
  const player2 = player();

  const board1 = player1.getPlayerBoard();
  const board2 = player2.getPlayerBoard();

  board1.placeBoat(2, "A3");
  board1.placeBoat(3, "D5");
  board2.placeBoat(4, "B7");

  const boats1 = board1.getBoats();
  const boats2 = board2.getBoats();

  const player1Board = createBoardWithCoordinates(board1);
  const player2Board = createBoardWithCoordinates(board2);
  document.body.append(player1Board, player2Board);

  boats1.forEach((boat) => displayBoat(boat, player1Board));
  boats2.forEach((boat) => displayBoat(boat, player2Board));
}

const translateCoordinatesToCellNum = (coordinate) => {
  const [letter, num] = coordinate.split("");
  const letterNum = letterArray().indexOf(letter);
  const numNum = num - 1;
  const translatedCoordinate = [numNum, letterNum].join("");
  return translatedCoordinate;
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
