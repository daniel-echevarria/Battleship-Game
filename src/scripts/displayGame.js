import {
  LETTERS,
  translateCellNumToCoordinate,
  translateCoordinatesToCellNum,
} from "./coordinateTranslation";

const log = (stuff) => {
  console.log(stuff);
};

export default function displayGame(player) {
  const playerBoard = player.getPlayerBoard();
  const boardWithCoordinates = document.createElement("div");
  boardWithCoordinates.classList.add("board-with-co");
  const numberedBoard = createNumberedBoard(playerBoard);
  addBoats(numberedBoard, player);
  const letterBand = createLetterBand();
  const numBand = createNumBand();
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
    launchAttack(cell, playerBoard);
    displayAttack(cell, playerBoard);
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

const handleEndGame = () => {
  log("game over");
};

const launchAttack = (cell, playerBoard) => {
  const cellNum = cell.id.split("-")[1];
  const coordinate = translateCellNumToCoordinate(cellNum);
  playerBoard.receiveAttack(coordinate);
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
