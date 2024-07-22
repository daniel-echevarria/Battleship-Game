const createShip = (length) => {
  let hitCount = 0;
  let shipsLength = length;

  const getHitCount = () => hitCount;
  const setHitCount = (newHitCount) => (hitCount = newHitCount);
  const getLength = () => shipsLength;

  const hit = () => (hitCount += 1);
  const isSunk = () => getLength() === getHitCount();

  return {
    getHitCount,
    setHitCount,
    hit,
    isSunk,
  };
};

export default createShip;
