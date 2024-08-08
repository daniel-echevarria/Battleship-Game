import { createLetterBand, createNumBand } from "./boardDomCoordinates";
import { translateCoordinatesToCellNum } from "./coordinateTranslation";
import { launchAttack } from "./game";
import player from "./player";

const log = (stuff) => {
  console.log(stuff);
};

export default function displayGame(player) {
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");

  const numberedBoard = createNumberedBoard(player);
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

const createNumberedBoard = (player) => {
  const myBoard = document.createElement("div");
  myBoard.classList = "board";
  for (let i = 0; i < 100; i++) {
    const cell = createBoardCell(i, player);
    myBoard.append(cell);
  }
  return myBoard;
};

const createBoardCell = (id, player) => {
  const cell = document.createElement("button");
  cell.classList.add("cell");
  cell.id = `cell-${id}`;
  cell.textContent = id;
  if (player.getPlayerType() === "human") return cell;
  const playerBoard = player.getPlayerBoard();
  cell.addEventListener("click", () => {
    launchAttack(id, playerBoard);
    cell.disabled = true;
  });
  return cell;
};

export const updateBoard = (boardEl, playerBoard) => {
  displayHits(boardEl, playerBoard);
  displayMissed(boardEl, playerBoard);
};

const displayHits = (boardEl, playerBoard) => {
  const hits = playerBoard.getHits();
  hits.forEach((hit) => {
    const cellId = translateCoordinatesToCellNum(hit);
    const cellEl = boardEl.querySelector(`#cell-${cellId}`);
    cellEl.classList.add("boat");
    cellEl.classList.add("striked");
  });
};

const displayMissed = (boardEl, playerBoard) => {
  const missedShots = playerBoard.getMissedShots();
  missedShots.forEach((shot) => {
    const cellId = translateCoordinatesToCellNum(shot);
    const cellEl = boardEl.querySelector(`#cell-${cellId}`);
    cellEl.classList.add("striked");
  });
};
