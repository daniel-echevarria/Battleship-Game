let count = 0;

export default function ship(length) {
  const shipId = count++;
  let hitCount = 0;
  const shipsLength = length;

  const getId = () => shipId;
  const getHitCount = () => hitCount;
  const setHitCount = (newHitCount) => (hitCount = newHitCount);
  const getLength = () => shipsLength;

  const hit = () => (hitCount += 1);
  const isSunk = () => getLength() === getHitCount();

  return {
    getId,
    getHitCount,
    setHitCount,
    getLength,
    hit,
    isSunk,
  };
}
