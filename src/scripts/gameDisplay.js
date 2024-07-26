import player from "./player";
import createBoardWithCoordinates from "./createBoardWithCoordinates";

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

  const player1Board = createBoardWithCoordinates(board1);
  const player2Board = createBoardWithCoordinates(board2);

  document.body.append(player1Board, player2Board);
}
