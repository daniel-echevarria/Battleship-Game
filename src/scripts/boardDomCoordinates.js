import { LETTERS } from "./coordinateTranslation";

const createCoordinateCell = (text) => {
  const coordinate = document.createElement("div");
  coordinate.classList.add("coordinate");
  coordinate.textContent = text;
  return coordinate;
};

export const createNumBand = () => {
  const numBand = document.createElement("div");
  numBand.classList.add("num-band");

  const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  numArray.map((num) => numBand.append(createCoordinateCell(num)));

  return numBand;
};

export const createLetterBand = () => {
  const letterBand = document.createElement("div");
  letterBand.classList.add("letter-band");
  LETTERS().map((letter) => letterBand.append(createCoordinateCell(letter)));
  return letterBand;
};
