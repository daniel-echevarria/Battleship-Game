import { translateCellNumToCoordinate } from "./coordinateTranslation";
import generateBoatCoordinates from "./generateBoatCoordinates";

const boatSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 5];

const randomBoat = (length, coordinates) => {
  return {
    length,
    coordinates,
  };
};

const generateRandomBoats = () => {
  const myBoats = boatSizes.map((length) => {
    const coordinates = generateBoatCoordinates(length).map((num) =>
      translateCellNumToCoordinate(num)
    );
    return randomBoat(length, coordinates);
  });
  return myBoats;
};

export default generateRandomBoats;
