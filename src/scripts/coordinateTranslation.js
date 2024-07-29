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
  const numCoordinate = parseInt(first) + 1;
  const letterCoordinate = second
    ? LETTERS()[parseInt(second)]
    : LETTERS()[first];
  const coordinate = [letterCoordinate, numCoordinate].join("");
  return coordinate;
};
