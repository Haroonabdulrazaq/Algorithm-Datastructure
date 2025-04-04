// https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true
function bigSorting(unsorted) {
  // Write your code here
  return unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    return a.localeCompare(b);
  });
}

// Problem Solving Approch
// Because we are comparing large SVGAnimatedNumberList, normal sort() method wont Worker.
// Instead, I copare the legth of the string, If same length, compare lexicographically
// localcompare, return -1 if a is less than b, and returns 1 if a greater b
