import player from "./player";
import displayGame from "./displayGame";
import {
  translateCellNumToCoordinate,
  translateCoordinatesToCellNum,
} from "./coordinateTranslation";
import { updateBoard } from "./displayGame";

const log = (stuff) => {
  console.log(stuff);
};

export default function game() {
  let isGameOver = false;

  const humanPlayer = player("human");
  const computerPlayer = player("computer");

  const humanBoard = humanPlayer.getPlayerBoard();
  const computerBoard = computerPlayer.getPlayerBoard();

  let currentPlayer = humanPlayer;

  humanBoard.placeBoat(2, ["A3", "A4"]);
  humanBoard.placeBoat(3, ["D5", "E5", "F5"]);
  computerBoard.placeBoat(4, ["B7", "B8", "B9", "B10"]);

  const humanPlayerBoardEl = displayGame(humanPlayer);
  const computerPlayerBoardEl = displayGame(computerPlayer);

  const computerCells = computerPlayerBoardEl.querySelectorAll("button");

  async function gameLoop() {
    while (!isGameOver) {
      if (currentPlayer === humanPlayer) {
        await waitForCellClick();
        updateBoard(computerPlayerBoardEl, computerBoard);
        currentPlayer = computerPlayer;
      } else {
        computerShot(humanBoard);
        updateBoard(humanPlayerBoardEl, humanBoard);
        currentPlayer = humanPlayer;
      }
      if (computerBoard.areAllBoatsSunk() || humanBoard.areAllBoatsSunk()) {
        isGameOver = true;
        handleEndGame();
      }
    }
  }

  // while playerBoard.areAllBoatsSunk() && handleEndGame();
  document.body.append(humanPlayerBoardEl, computerPlayerBoardEl);

  gameLoop();
}

function getPromiseFromEvent(boardEl, event) {
  return new Promise((resolve) => {
    const listener = () => {
      boardEl.removeEventListener(event, listener);
      resolve();
    };
    boardEl.addEventListener(event, listener);
  });
}

async function waitForCellClick() {
  const computerBoard = document.querySelectorAll(".board")[1];
  await getPromiseFromEvent(computerBoard, "click");
}

const computerShot = (humanBoard) => {
  const attemptedNumbers = humanBoard
    .getAttempts()
    .map((attempt) => translateCoordinatesToCellNum(attempt));
  let randNum = Math.floor(Math.random() * 100);
  while (attemptedNumbers.includes(randNum)) {
    randNum = Math.floor(Math.random() * 100);
  }
  log(randNum);
  launchAttack(randNum, humanBoard);
};

export const launchAttack = (cellNum, playerBoard) => {
  const coordinate = translateCellNumToCoordinate(cellNum);
  playerBoard.receiveAttack(coordinate);
};

export const handleEndGame = () => {
  log("game over");
};
