//www.hackerrank.com/challenges/separate-the-numbers/problem?isFullScreen=true
https: function separateNumbers(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let firstNumStr = s.slice(0, i);
    let myStr = firstNumStr;

    let firstNum = BigInt(firstNumStr);
    let nextNum = firstNum + 1n;

    while (myStr.length < s.length) {
      myStr += nextNum.toString();
      nextNum++;
    }

    if (myStr === s) {
      console.log(`YES ${firstNum}`);
      return;
    }
  }

  console.log('NO');
}
