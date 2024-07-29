import player from "./player";
import displayGame from "./displayGame";
import {
  translateCellNumToCoordinate,
  translateCoordinatesToCellNum,
} from "./coordinateTranslation";

const log = (stuff) => {
  console.log(stuff);
};

export default function game() {
  let isGameOver = false;

  const player1 = player("human");
  const player2 = player("computer");

  const board1 = player1.getPlayerBoard();
  const board2 = player2.getPlayerBoard();

  const players = [player1, player2];
  let duePlayer = players[0];

  board1.placeBoat(2, ["A3", "A4"]);
  board1.placeBoat(3, ["D5", "E5", "F5"]);
  board2.placeBoat(4, ["B7", "B8", "B9", "B10"]);

  const player1BoardEl = displayGame(player1);
  const player2BoardEl = displayGame(player2);

  computerShot(board1);

  renderBoard(player1BoardEl, board1);

  document.body.append(player1BoardEl, player2BoardEl);
}

const computerShot = (humanBoard) => {
  const randNum = Math.floor(Math.random() * 100);
  launchAttack(randNum, humanBoard);
};

export const launchAttack = (cellNum, playerBoard) => {
  const coordinate = translateCellNumToCoordinate(cellNum);
  playerBoard.receiveAttack(coordinate);
};

const renderBoard = (boardEl, playerBoard) => {
  const missedShots = playerBoard.getMissedShots();
  const hits = playerBoard.getHits();
  missedShots.forEach((shot) => {
    const cellId = translateCoordinatesToCellNum(shot);
    const cellEl = boardEl.querySelector(`#cell-${cellId}`);
    cellEl.classList.add("striked");
  });
  hits.forEach((hit) => {
    const cellId = translateCoordinatesToCellNum(hit);
    const cellEl = boardEl.querySelector(`#cell-${cellId}`);
    cellEl.classList.add("striked");
  });
};

export const handleEndGame = () => {
  log("game over");
};
