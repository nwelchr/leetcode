function mostFrequentElement(arr) {
  const elMap = new Map();
  for (const val of arr) {
    elMap.set(val, (elMap.get(val) || 0) + 1);
  }

  const ans = [...elMap.entries()].reduce(
    (acc, [val, count]) => {
      if (acc.count < count || (acc.count === count && val < acc.val)) {
        return { val, count };
      }
      return acc;
    },
    { val: null, count: 0 }
  );

  return ans.val;
}

// Test cases
const testCases = [
  { input: [1, 3, 2, 3, 4, 1, 1], expected: 1 },
  { input: [5, 5, 4, 6, 6, 4, 4], expected: 4 },
  { input: [7, 8, 8, 9, 7, 7, 8, 8], expected: 8 },
];

testCases.forEach(({ input, expected }, index) => {
  const result = mostFrequentElement(input);
  if (result === expected) {
    console.log(`Test case ${index + 1}: PASSED`);
  } else {
    console.log(
      `Test case ${index + 1}: FAILED (expected ${expected}, got ${result})`
    );
  }
});
