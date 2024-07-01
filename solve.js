const Statuses = {
  STANDARD: "STANDARD",
  SPECIAL: "SPECIAL",
  REJECTED: "REJECTED",
};

const VOLUME_THRESHOLD = 1000000; // cm³
const DIMENSION_THRESHOLD = 150; // cm
const MASS_THRESHOLD = 20; // kg

const solve = (width, height, length, mass) => {
  const volume = width * height * length;
  const isHeavy = mass >= MASS_THRESHOLD;
  const isBulky =
    volume >= VOLUME_THRESHOLD ||
    [width, length, height].some((el) => el >= DIMENSION_THRESHOLD);

  if (isHeavy && isBulky) return Statuses.REJECTED;
  if (isHeavy || isBulky) return Statuses.SPECIAL;
  return Statuses.STANDARD;
};

console.log(solve(160, 70, 70, 10) === "SPECIAL");
console.log(solve(120, 100, 100, 10) === "SPECIAL");
console.log(solve(90, 90, 118, 10) === "STANDARD");
console.log(solve(120, 100, 50, 30) === "SPECIAL");
console.log(solve(80, 110, 80, 70) === "SPECIAL");
console.log(solve(70, 80, 90, 10) === "STANDARD");
console.log(solve(100, 120, 60, 19) === "STANDARD");
console.log(solve(150, 70, 70, 10) === "SPECIAL");
console.log(solve(120, 100, 100, 10) === "SPECIAL");
console.log(solve(90, 90, 118, 10) === "STANDARD");
console.log(solve(120, 100, 110, 20) === "REJECTED");
console.log(solve(80, 110, 80, 70) === "SPECIAL");
console.log(solve(70, 80, 90, 10) === "STANDARD");
console.log(solve(100, 150, 60, 30) === "REJECTED");
