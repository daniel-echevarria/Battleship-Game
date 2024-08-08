export default function generateBoatCoordinates(length, initial, direction) {
  return direction === "vertical"
    ? genVerticalBoat(length, initial)
    : genHorizontalBoat(length, initial);
}

const genVerticalBoat = (length) => {
  const boatCoordinates = [];
  let initial = genValidVerticalInitial(length);
  for (let i = 0; i < length; i++) {
    boatCoordinates.push(initial);
    initial += 10;
  }
  return boatCoordinates;
};

const genHorizontalBoat = (length) => {
  const boatCoordinates = [];
  let initial = genValidHorizontalInitial(length);
  for (let i = 0; i < length; i++) {
    boatCoordinates.push(initial++);
  }
  return boatCoordinates;
};

export const genValidHorizontalInitial = (length) => {
  const maxCol = 10 - length;
  const randomCol = Math.floor(Math.random() * (maxCol + 1));
  const randomRow = Math.floor(Math.random() * 10);
  const myNum = randomRow.toString() + randomCol.toString();
  return myNum;
};

export const genValidVerticalInitial = (length) => {
  const maxRow = 10 - length;
  const randomRow = Math.floor(Math.random() * (maxRow + 1));
  const randomCol = Math.floor(Math.random() * 10);
  const myNum = randomRow.toString() + randomCol.toString();
  return myNum;
};

for (let i = 0; i < 20; i++) {
  console.log(genValidHorizontalInitial(5));
}
