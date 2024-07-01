// const doesPatternMatch = (pattern, s) => {
//   const sArr = s.split(" ");

//   if (pattern.length !== sArr.length) return false;

//   const patternToString = new Map();
//     const stringToPattern = new Set();

//     for (let i = 0; i < pattern.length; i++) {
//       const p = pattern[i];
//       const word = sArr[i];

//       if (!patternToString.get(p)) {
//         patternToString.set(p, word);
//         if (stringToPattern.has(word)) return false;
//         stringToPattern.add(word);
//       } else {
//         if (patternToString.get(p) !== word) {
//           return false;
//         }
//       }
//     }

//   return true;
// };

const doesPatternMatch = (pattern, s) => {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  const patternToString = new Map();
  const wordSet = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = words[i];

    if (!patternToString.get(p)) {
      patternToString.set(p, word);
      if (wordSet.has(word)) return false;
      wordSet.add(word);
    } else {
      if (patternToString.get(p) !== word) {
        return false;
      }
    }
  }

  return true;
};

// abba, dog cat cat dog -> true
// abba, dog cat cat fish -> false
// abbc, dog cat cat dog -> false

console.log(doesPatternMatch("abba", "dog cat cat dog"));
console.log(doesPatternMatch("abba", "dog cat cat fish"));
console.log(doesPatternMatch("aaaa", "dog cat cat dog"));
console.log(doesPatternMatch("abbc", "dog cat cat dog"));
console.log(doesPatternMatch("abbc", "dog cat cat fish"));
