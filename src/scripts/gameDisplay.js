import player from "./player";

const log = (stuff) => {
  console.log(stuff);
};

export default function gameDisplay() {
  const player1 = player();
  const player2 = player();

  const board1 = player1.getPlayerBoard();

  const coolBoard = createBoard();
  log(coolBoard);
  return coolBoard;
}

const createBoard = () => {
  const myBoard = document.createElement("div");
  myBoard.classList = "board";
  for (let i = 0; i < 100; i++) {
    myBoard.append(createBoardCell(i));
  }
  return myBoard;
};

const createBoardCell = (id) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = id;
  return cell;
};
