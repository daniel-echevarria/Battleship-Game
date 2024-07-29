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
  const cellNumString = cellNum.toString();
  const [first, second] = cellNumString.split("");
  let numCoordinate;
  let letterCoordinate;
  if (second) {
    letterCoordinate = LETTERS()[parseInt(second)];
    numCoordinate = parseInt(first) + 1;
  } else {
    letterCoordinate = LETTERS()[first];
    numCoordinate = 1;
  }
  const coordinate = [letterCoordinate, numCoordinate].join("");
  return coordinate;
};
