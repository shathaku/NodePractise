/*
Input: aaakkkhhhaak
Output: a3k3h3a2k1
*/

function countChar(input) {
  let finalStr = '';
  let counter = 1;
  const inputArr = [...input];
  console.log(inputArr);
  inputArr.forEach((c, i) => {
    if (c !== inputArr[i + 1]) {
      finalStr = `${finalStr}${c}${counter}`;
      counter = 1;
    } else {
      counter += 1;
    }
  });
  return finalStr;
}

console.log(countChar('aaakkkhhhaak'));


































const sum = function (a, b) {
  return a + b
}

const sum = (a, b) => {
  return a+b;
}
