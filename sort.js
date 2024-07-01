const obj1 = {
  1: 24,
  2: 50,
  3: 250,
  4: 100,
};

const getKeyWithHighestVal = (obj) => {
  const sortedEntries = Object.entries(obj).sort(
    ([key1, val1], [key2, val2]) => val2 - val1
  );

  return sortedEntries[0][0];
};

console.log(getKeyWithHighestVal(obj1));
