import ship from "./ship";

export default function gameBoard() {
  let boats = [];
  let missedShots = [];
  let hits = [];

  const getBoats = () => boats;
  const getMissedShots = () => missedShots;
  const getHits = () => hits;

  const placeBoat = (boatSize, coordinates) => {
    // verifyBoatInfos(boatSize, coordinates);
    const boat = {
      boat: ship(boatSize),
      coordinates: coordinates,
    };
    boats.push(boat);
  };

  // const verifyBoatInfos = (boatSize, coordinates) => {
  //   if (boatSize != coordinates.length) {
  //     throw new Error("Boat size needs to match coordinates length");
  //   }
  // };

  const receiveAttack = (coordinates) => {
    const hitBoat = boats.find((boat) =>
      boat.coordinates.includes(coordinates)
    );
    if (hitBoat) {
      hitBoat.boat.hit();
      hits.push(coordinates);
    } else {
      missedShots.push(coordinates);
    }
  };

  const areAllBoatsSunk = () => {
    return getBoats().every((boat) => boat.boat.isSunk());
  };

  return {
    placeBoat,
    receiveAttack,
    getBoats,
    getMissedShots,
    getHits,
    areAllBoatsSunk,
  };
}
