function insertionSort1(n, arr) {
  // Write your code here
  let lastElement = arr.pop();

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > lastElement) {
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
    } else {
      arr.splice(i, 1, lastElement);
      console.log(arr.join(' '));
      break;
    }
  }
}
// This is for a partially sorted array

// Get last Element
// Loop through the array from the last element to the first
// If the previous element is greater than the last element, shift the element to the right
// Print the array after each iteration
// If the previous element is less than the last element, insert the last element at the current position
// Print the array after each iteration

// Sample Input

// 5
// [1,2,4,5,3]

// Sample Output
/*
1 2 4 5 5
1 2 4 4 5
1 2 3 4 5
*/
