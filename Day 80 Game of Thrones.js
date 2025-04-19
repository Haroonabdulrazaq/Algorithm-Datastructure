//www.hackerrank.com/challenges/game-of-thrones/problem?isFullScreen=false
https: function gameOfThrones(s) {
  // Write your code here
  let odd = 0;
  let trackObj = {};

  for (let i = 0; i < s.length; i++) {
    trackObj[s[i]] = (trackObj[s[i]] || 0) + 1;
  }

  for (const [key, value] of Object.entries(trackObj)) {
    if (value % 2 != 0) {
      odd++;
    }
  }

  if (odd > 1) return 'NO';
  return 'YES';
}
