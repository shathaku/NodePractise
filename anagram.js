function anagram(word1, word2) {
  let a = word1.toLowerCase();
  let b = word2.toLowerCase();

  a = a.split('').sort().join('');
  b = b.split('').sort().join('');
  console.log(a, b);
  console.log(a === b);
}
console.log(process.env.API_URL);
anagram('Mary', 'army');

