import player from "./player";
import displayGame from "./displayGame";

const log = (stuff) => {
  console.log(stuff);
};

export default function game() {
  const player1 = player("human");
  const player2 = player("computer");

  const board1 = player1.getPlayerBoard();
  const board2 = player2.getPlayerBoard();

  board1.placeBoat(2, ["A3", "A4"]);
  board1.placeBoat(3, ["D5", "E5", "F5"]);
  board2.placeBoat(4, ["B7", "B8", "B9", "B10"]);

  const player1Board = displayGame(player1);
  const player2Board = displayGame(player2);

  document.body.append(player1Board, player2Board);
}
