// https://www.hackerrank.com/challenges/bear-and-steady-gene/problem?isFullScreen=true
function steadyGene(gene) {
  // Write your code here
  let geneLength = gene.length;
  let expectedChar = geneLength / 4;

  let freqObj = { A: 0, C: 0, G: 0, T: 0 };
  for (let i = 0; i < geneLength; i++) {
    freqObj[gene[i]]++;
  }

  let valueArr = Object.values(freqObj);
  if (valueArr.every((count) => count === expectedChar)) {
    return 0;
  }

  let minLength = geneLength;
  let j = 0;

  for (let i = 0; i < geneLength; i++) {
    freqObj[gene[i]]--;
    while (isValid(freqObj, expectedChar)) {
      minLength = Math.min(minLength, i - j + 1);
      freqObj[gene[j]]++;
      j++;
    }
  }
  return minLength;

  function isValid(freqObj, expectedChar) {
    return (
      freqObj['A'] <= expectedChar &&
      freqObj['C'] <= expectedChar &&
      freqObj['G'] <= expectedChar &&
      freqObj['T'] <= expectedChar
    );
  }
}
