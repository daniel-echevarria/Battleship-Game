export default function ship(length) {
  let hitCount = 0;
  const shipsLength = length;

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
}
