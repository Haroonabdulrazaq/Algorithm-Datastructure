function countChars(str) {
  const counter = {};
  for (const char of str) {
    counter[char] = (counter[char] || 0) + 1;
  }
  return counter;
}

function makingAnagrams(s1, s2) {
  // Write your code here

  const d1 = countChars(s1);
  const d2 = countChars(s2);
  let total = 0;

  for (const char in d1) {
    if (d2[char]) {
      total += Math.abs(d1[char] - d2[char]);
    } else {
      total += d1[char];
    }
  }

  for (const char in d2) {
    if (!d1[char]) {
      total += d2[char];
    }
  }

  return total;
}
