// https://www.hackerrank.com/challenges/almost-sorted/problem?isFullScreen=true
function almostSorted(arr) {
  // Write your code here
  let arrSlice = arr.slice(0);
  let sortedArr = arrSlice.toSorted((a, b) => a - b);

  if (arraysEqual(arr, sortedArr)) {
    console.log('yes');
    return;
  }
  let leftIndex = 0,
    rightIndex = 0;

  for (let i = 0; i < arrSlice.length - 1; i++) {
    if (arrSlice[i] > arrSlice[i + 1]) {
      leftIndex = i;
      break;
    }
  }
  for (let j = arrSlice.length - 1; j >= 0; j--) {
    if (arrSlice[j] < arrSlice[j - 1]) {
      rightIndex = j;
      break;
    }
  }

  // Swap condition
  let swapArr = arr.slice(0);
  [swapArr[leftIndex], swapArr[rightIndex]] = [
    swapArr[rightIndex],
    swapArr[leftIndex],
  ];

  if (arraysEqual(swapArr, sortedArr)) {
    console.log('yes');
    console.log(`swap ${leftIndex + 1} ${rightIndex + 1}`);
    return;
  }
  // Reverse Condition
  let reverseArr = arr.slice(0);
  let myArr = reverseArr
    .splice(leftIndex, rightIndex - leftIndex + 1)
    .reverse();
  reverseArr.splice(leftIndex, 0, ...myArr);

  if (arraysEqual(reverseArr, sortedArr)) {
    console.log('yes');
    console.log(`reverse ${leftIndex + 1} ${rightIndex + 1}`);
    return;
  }
  console.log('no');
}

// Helper function to check equality of array element
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/*
Sample Input1
1 5 4 3 2 6

Sample Output1
yes
reverse 2 5


Sample Input 2
4 2

Sample Output2
yes  
swap 1 2
*/

/*
My problem solving approach
To Identify the start of the unsorted I ned the index from left and right
I got that by looping from the front(leftindex) and from the back(rightIndex) and get the index
that is greater(leftIndex) and less(rightIndex)
That way we can swap and check if the arr equals the sortedArr. If it is we return yes, else 
The execution continues to the reverse, reverse using the left and rightIndex, and then checks if its sorted.
if it is sorted it returns true, else 
It will move execution to print no
*/
