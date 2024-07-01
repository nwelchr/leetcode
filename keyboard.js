const type = (keyboard, word) => {
  const steps = [];
  const rows = keyboard.length;
  const cols = keyboard[0].length;

  const keyboardMap = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      keyboardMap.set(keyboard[i][j], [i, j]);
    }
  }

  let [currX, currY] = [0, 0];

  for (const letter of word) {
    const [nextX, nextY] = keyboardMap.get(letter);

    const [normalDiffX, normalDiffY] = [nextX - currX, nextY - currY];

    const backtrackingDiffX =
      nextX > currX ? nextX - currX - rows : nextX - currX + rows;
    const backtrackingDiffY =
      nextY > currY ? nextY - currY - cols : nextY - currY + cols;

    steps.push({
      rows:
        Math.abs(normalDiffX) > Math.abs(backtrackingDiffX)
          ? backtrackingDiffX
          : normalDiffX,
      cols:
        Math.abs(normalDiffY) > Math.abs(backtrackingDiffY)
          ? backtrackingDiffY
          : normalDiffY,
    });
    [currX, currY] = [nextX, nextY];
  }

  return steps;
};

const keyboard = [
  ["A", "B", "C", "D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M", "N"],
  ["O", "P", "Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z", "*", "*"],
];

console.log(type(keyboard, "YACHT"));
console.log(type(keyboard, "DOG"));
console.log(type(keyboard, "CATCH"));
console.log(type(keyboard, "BUTTER"));
