import { createLetterBand, createNumBand } from "./boardDomCoordinates";
import { translateCoordinatesToCellNum } from "./coordinateTranslation";
import { handleEndGame, launchAttack } from "./game";

const log = (stuff) => {
  console.log(stuff);
};

export default function displayGame(player) {
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");

  const playerBoard = player.getPlayerBoard();
  const numberedBoard = createNumberedBoard(playerBoard);
  const letterBand = createLetterBand();
  const numBand = createNumBand();

  addBoats(numberedBoard, player);

  boardWithCoordinates.append(numBand, numberedBoard, letterBand);
  return boardWithCoordinates;
}

const addBoats = (numberedBoard, player) => {
  const boats = player.getPlayerBoard().getBoats();
  if (player.getPlayerType() === "human") {
    boats.forEach((boat) => displayBoat(boat, numberedBoard));
  }
};

const displayBoat = (boat, board) => {
  const boatCellsNumbers = boat.coordinates.map((coordinate) =>
    translateCoordinatesToCellNum(coordinate)
  );
  boatCellsNumbers.forEach((cellNum) => {
    const cellEl = board.querySelector(`#cell-${cellNum}`);
    cellEl.classList.add("boat");
  });
};

const createNumberedBoard = (playerBoard) => {
  const myBoard = document.createElement("div");
  myBoard.classList = "board";
  for (let i = 0; i < 100; i++) {
    const cell = createBoardCell(i, playerBoard);
    myBoard.append(cell);
  }
  return myBoard;
};

const createBoardCell = (id, playerBoard) => {
  const cell = document.createElement("button");
  cell.classList.add("cell");
  cell.id = `cell-${id}`;
  // cell.textContent = id;
  cell.addEventListener("click", function () {
    launchAttack(cellNum, playerBoard);
    // displayAttack(cell, playerBoard);
    cell.classList.add("striked");
    playerBoard.areAllBoatsSunk() && handleEndGame();
  });
  return cell;
};

const displayAttack = (cell, playerBoard) => {
  const cellNum = parseInt(cell.id.split("-")[1]);
  const hits = playerBoard.getHits();
  const strikedBoat = hits.map((shot) => {
    return translateCoordinatesToCellNum(shot);
  });
  if (strikedBoat.includes(cellNum)) {
    cell.classList.add("boat");
  }
};
