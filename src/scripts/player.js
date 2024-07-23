import gameBoard from "./gameboard";

export default function player(type) {
  const playerType = type;
  const playerBoard = gameBoard();

  const getPlayerType = () => playerType;
  const getPlayerBoard = () => playerBoard;

  return {
    getPlayerType,
    getPlayerBoard,
  };
}
