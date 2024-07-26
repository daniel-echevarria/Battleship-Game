export const LETTERS = () => ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const translateCoordinatesToCellNum = (coordinate) => {
  const letter = coordinate[0].toUpperCase();
  const num = coordinate.slice(1);
  const letterNum = LETTERS().indexOf(letter);
  const numNum = num - 1;
  const translatedCoordinate = [numNum, letterNum].join("");
  const cellNum = parseInt(translatedCoordinate);
  return cellNum;
};

export const translateCellNumToCoordinate = (cellNum) => {
  const [first, second] = cellNum.split("");
  const letterIndex = parseInt(first);
  const coordinateLetter = LETTERS()[letterIndex];
  const coordinateNum = second ? parseInt(second) + 1 : parseInt(first) + 1;
  const coordinate = [coordinateLetter, coordinateNum].join("");
  return coordinate;
};
