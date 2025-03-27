function runningTime(arr) {
  // Write your code here
  let numShift = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) numShift++;
    }
  }
  return numShift;
}
// Record the number of times there is a shift;
