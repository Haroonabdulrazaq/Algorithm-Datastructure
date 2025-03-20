//https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true

function strangeCounter(t) {
  // Write your code here
  let nextValue = 3;
  let temp = t;
  let value = 0;

  for (let i = 0; i < t; i++) {
    if (temp > nextValue) {
      temp -= nextValue;
    } else {
      value = nextValue - temp + 1;
      return value;
    }
    nextValue *= 2;
  }
}

// Sample Input
console.log(strangeCounter(3)); // 1
console.log(strangeCounter(4)); // 6
console.log(strangeCounter(14)); // 8
console.log(strangeCounter(15)); // 7
console.log(strangeCounter(16)); // 6
console.log(strangeCounter(17)); // 5

// My thinking Approach

// [3,6,12,24,48,96]
// given time t keep subtracting the values of the array from the time
// 10 - 3 = 7 if 7 is greater than the next number
// 7-6 = 1 else
// 1 is the position of the next cycle -> 12
// 12 - 1 + 1 = 12 -> Value is 12

// Example 13:
// 13 - 3 = 10 is greater than 6 then
// 10 - 6 = 4 is less than 12(next cycle then)
// it's at position 4 on the 3rd cycle
// 12 - 4 + 1 = 9 -> Value is 9

// Example 4:

// 4 - 3 = 1 is less than the next cycle 6 then
// 6 - 1 + 1 = 6 Value is 6
