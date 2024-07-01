function findLongestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  let substrings = new Set();
  let countOfMax = 0;
  let visited = new Set();

  for (let end = 0; end < s.length; end++) {
    const letter = s[end];
    while (visited.has(letter)) {
      visited.delete(s[start]);
      start++;
    }
    visited.add(letter);
    const newLength = end - start + 1;
    const currentSubstring = s.slice(start, end + 1);
    if (maxLength < newLength) {
      maxLength = newLength;
      substrings = new Set([currentSubstring]); // Reset and add current substring
      countOfMax = 1;
    } else if (maxLength === newLength && !substrings.has(currentSubstring)) {
      substrings.add(currentSubstring); // Add new distinct substring
      countOfMax++;
    }
  }

  return {
    length: maxLength,
    substring: substrings.values().next().value,
    count: countOfMax,
  };
}

// Test cases
const testCases = [
  { input: "abcabcbb", expected: { length: 3, substring: "abc", count: 3 } },
  { input: "bbbbb", expected: { length: 1, substring: "b", count: 1 } }, // Corrected expected count to 1
  { input: "pwwkew", expected: { length: 3, substring: "wke", count: 2 } },
];

testCases.forEach(({ input, expected }, index) => {
  const result = findLongestSubstring(input);
  if (
    result.length === expected.length &&
    result.substring === expected.substring &&
    result.count === expected.count
  ) {
    console.log(`Test case ${index + 1}: PASSED`);
  } else {
    console.log(
      `Test case ${index + 1}: FAILED (expected ${JSON.stringify(
        expected
      )}, got ${JSON.stringify(result)})`
    );
  }
});
