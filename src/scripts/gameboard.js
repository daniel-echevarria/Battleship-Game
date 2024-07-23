import ship from "./ship";

export default function gameBoard() {
  let boats = [];
  let missedShots = [];

  const getBoats = () => boats;
  const getMissedShots = () => missedShots;

  const placeBoat = (boatSize, coordinates) => {
    const boat = {
      boat: ship(boatSize),
      coordinates: coordinates,
    };
    boats.push(boat);
  };

  const receiveAttack = (coordinates) => {
    const hitBoat = boats.find((boat) => boat.coordinates == coordinates);
    hitBoat ? hitBoat.boat.hit() : missedShots.push(coordinates);
  };

  return {
    placeBoat,
    receiveAttack,
    getBoats,
    getMissedShots,
  };
}
