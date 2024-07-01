const mazeDirections = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

const findShortestPath = (maze) => {
  const rows = maze.length;
  const cols = maze[0].length;

  let start = [0, 0];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === "S") start = [r, c];
    }
  }

  const queue = [{ position: start, path: [] }];

  const visited = new Set(start.join(""));

  while (queue.length) {
    const {
      position: [px, py],
      path,
    } = queue.shift();

    for (const [direction, [dx, dy]] of Object.entries(mazeDirections)) {
      const nx = px + dx;
      const ny = py + dy;

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        !visited.has([nx, ny].join(""))
      ) {
        const newVal = maze[nx][ny];

        if (newVal === ".") {
          queue.push({
            position: [nx, ny],
            path: [...path, direction],
          });
          visited.add([nx, ny].join(""));
        }

        if (newVal === "E") {
          return [...path, direction];
        }
      }
    }
  }

  return [];
};

// S start
// E end
// . open path
// # wall

const maze = [
  ["S", ".", "#", "#", "#"],
  [".", ".", ".", "#", "E"],
  ["#", "#", ".", ".", "."],
  ["#", "#", "#", "#", "#"],
];

const maze2 = [
  ["S", ".", ".", ".", "E"],
  ["#", "#", ".", "#", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", "#", "."],
];

const maze3 = [
  ["S", ".", "#", ".", "E"],
  ["#", ".", "#", ".", "."],
  ["#", ".", "#", ".", "."],
  ["#", ".", ".", ".", "#"],
];

const maze4 = [
  ["S", ".", "#", "#", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", ".", "#", ".", "E"],
  ["#", ".", ".", ".", "#"],
];

const maze5 = [
  ["S", ".", "#", "#", "#"],
  ["#", ".", ".", ".", "#"],
  ["#", "#", "#", ".", "E"],
  ["#", "#", "#", "#", "#"],
];

const maze6 = [
  ["S", ".", ".", "#", "#"],
  [".", ".", ".", ".", "#"],
  ["#", "#", "#", ".", "."],
  ["#", "#", "#", "#", "#"],
  [".", ".", ".", "#", "#"],
  [".", ".", ".", ".", "#"],
  ["#", "#", "#", ".", "E"],
  ["#", "#", "#", "#", "#"],
];

const complexMaze = [
  ["S", ".", "#", "#", "#", ".", ".", ".", "#", "E"],
  ["#", ".", "#", ".", ".", ".", "#", ".", "#", "."],
  ["#", ".", "#", ".", "#", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", "#", "#", "#", "."],
  ["#", "#", "#", ".", "#", ".", ".", ".", ".", "."],
  ["#", ".", "#", ".", "#", "#", "#", "#", "#", "#"],
  ["#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#", ".", "#"],
];

console.log("1: ", findShortestPath(maze));
console.log("2: ", findShortestPath(maze2));
console.log("3: ", findShortestPath(maze3));
console.log("4: ", findShortestPath(maze4));
console.log("5: ", findShortestPath(maze5));
console.log("6: ", findShortestPath(maze6));
console.log("Complex: ", findShortestPath(complexMaze));
