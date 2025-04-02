function closestNumbers(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  let temp = 0;

  for (let x = 2; x < arr.length; x++) {
    temp = arr[x] - arr[x - 1];
    if (temp <= diff) {
      diff = temp;
    }
  }

  let result = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === diff) {
      result.push(arr[i - 1], arr[i]);
    }
  }

  return result;
}

/*
Sample Input
 [5,4,3,2]

 Sample Output
 [2, 3 ,3, 4 ,4 ,5]
*/

/*
Sample Input
-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854

Sample output
 [-20, 30]
*/

// My Approach
// Sort the Array in asending order
// I need to get the minimum difference when I go through the array the first time
// Get any pair that can give that same difference and put it in a result array
// retrun the result array
