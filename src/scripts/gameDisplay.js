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

  const boats1 = board1.getBoats();

  const player1Board = createBoardWithCoordinates();
  document.body.append(player1Board);

  boats1.forEach((boat) => displayBoat(boat, player1Board));
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
  const cellNum = translateCoordinatesToCellNum(boat.coordinates);
  const boatStart = cellNum;
  const boatEnd = parseInt(cellNum) + parseInt(boatLength);
  for (let i = boatStart; i < boatEnd; i++) {
    const cellEl = document.getElementById(i);
    cellEl.classList.add("boat");
  }
};
