function compressString(str) {
  let compressedStr = "";
  let i = 0;

  while (i < str.length) {
    const currLetter = str[i];
    let j = i + 1;
    while (j < str.length && str[j] === currLetter) {
      j++;
    }
    compressedStr = compressedStr.concat(`${currLetter}${j - i}`);
    i = j;
  }

  return compressedStr.length < str.length ? compressedStr : str;
}

console.log(compressString("aabcccccaaa")); // Expected output: "a2b1c5a3"
console.log(compressString("abcdef")); // Expected output: "abcdef"
console.log(compressString("aabbcc")); // Expected output: "aabbcc"

function expandString(str) {
  let expandedStr = "";
  let i = 0;

  while (i < str.length) {
    const currLetter = str[i];
    let j = i + 1;
    let currNum = "";
    while (j < str.length && !isNaN(parseInt(str[j]))) {
      currNum += str[j];
      j++;
    }
    currNum = parseInt(currNum);

    if (!currNum) return "";

    for (let k = 0; k < currNum; k++) {
      expandedStr += currLetter;
    }

    i = j;
  }

  return expandedStr;
}

// Test Cases
console.log(expandString("a2b1c5a3")); // Expected output: "aabcccccaaa"
console.log(expandString("a2b3")); // Expected output: "aabbb"
console.log(expandString("a2b")); // Expected output: ""

function compressAndExpand(str) {
  const hasDigits = /[a-zA-Z]\d/.test(str);

  if (hasDigits) {
    return expandString(str);
  } else {
    return compressString(str);
  }
}

// Test Cases
console.log(compressAndExpand("aabcccccaaa")); // Expected output: "a2b1c5a3"
console.log(compressAndExpand("abcdef")); // Expected output: "abcdef"
console.log(compressAndExpand("a2b1c5a3")); // Expected output: "aabcccccaaa"
console.log(compressAndExpand("a2b3")); // Expected output: "aabbb"
console.log(compressAndExpand("a2b")); // Expected output: ""
