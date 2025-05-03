function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks = sticks.sort((a, b) => b - a);
  for (let i = 0; i < sticks.length - 2; i++) {
    let temp = sticks.slice(i, i + 3).reverse();

    if (temp[0] + temp[1] > temp[2]) {
      return temp;
    }
  }
  return [-1];
}

/*A non-degenerate triange: Its a triangle where the first 2 sides when summed up is greater than the last side
The challange wants us to get the maximum possible triangle sides.
Hence: We sort in ascending order(another way would be to loop from the back)
In order to keep the order of elements in the array, therefore we reverse the temp array
then check if the sum is greater than the 3rd element
Sample:
1. [1,1,1,3,3] -> Sample array
2. [3,3,1,1,1] -> sort the array, then loop
3. [3,3,1] -> slice 3 element at a time
4. [1,3,3] -> reverse the temp array
5. (1 + 3) > 3 -> compare the elements, if true return
6. -> Repeat step 3 - 5 till the end of the array
7. Return [-1] if its not found.
*/
