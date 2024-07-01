/*
Given a keyboard layout and a word, this function prints the list of steps needed to spell the word.
You will start at the first letter on the keyboard.
Input: (keyboard, word)
Example: "DOG"
- A -> D: {rows: 0, cols: 3}
- D -> O: {rows: 2, cols: -3}
- O -> G: {rows: -2, cols: 6}
Expected output:  [{rows: 0, cols: 3}, {rows: 2, cols: -3}, {rows: -2, cols: 6}]
*/

const type = (keyboard, word) => {
  // Function to find the position of a letter on the keyboard
  const findPosition = (char) => {
    for (let i = 0; i < keyboard.length; i++) {
      for (let j = 0; j < keyboard[i].length; j++) {
        if (keyboard[i][j] === char) {
          return { row: i, col: j };
        }
      }
    }
    return null;
  };

  const steps = [];
  let currentPos = findPosition(word[0]); // Start at the first letter

  for (let i = 1; i < word.length; i++) {
    let nextPos = findPosition(word[i]);
    let step = {
      rows: nextPos.row - currentPos.row,
      cols: nextPos.col - currentPos.col,
    };
    steps.push(step);
    currentPos = nextPos;
  }

  return steps;
};

// Example keyboard layout
const keyboard = [
  ["A", "B", "C", "D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M", "N"],
  ["O", "P", "Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z", "*", "*"],
];

// Test cases
console.log(type(keyboard, "YACHT")); // Expected output: [
    { rows: -3, cols: -3 },
    { rows: 0, cols: 2 },
    { rows: 1, cols: -2 },
    { rows: 1, cols: 5 }
  ]
console.log(type(keyboard, "DOG")); // Expected output: [ { rows: 2, cols: -3 }, { rows: -2, cols: 6 } ]
console.log(type(keyboard, "CATCH")); // Expected output: [
    { rows: 0, cols: -2 },
    { rows: 2, cols: 5 },
    { rows: -2, cols: -3 },
    { rows: 1, cols: -2 }
  ]
console.log(type(keyboard, "BUTTER")); // Expected output: [
    { rows: 2, cols: 5 },
    { rows: 0, cols: -1 },
    { rows: 0, cols: 0 },
    { rows: -2, cols: -1 },
    { rows: 2, cols: -1 }
  ]
