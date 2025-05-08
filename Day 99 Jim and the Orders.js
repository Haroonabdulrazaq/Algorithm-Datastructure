// https://www.hackerrank.com/challenges/jim-and-the-orders/problem?isFullScreen=true

function jimOrders(orders) {
  // Write your code here
  let sum = 0;
  let orderTrackArr = [];
  for (let i = 0; i < orders.length; i++) {
    sum = orders[i][0] + orders[i][1];
    orderTrackArr.push([i + 1, sum]);
  }

  return orderTrackArr.sort((a, b) => a[1] - b[1]).map((element) => element[0]);
}

/*
Problem solving aproach
- The problem is so get the Order in which the order wll be fulfilled based on the order no and Serve time.
- The order no is the index of order, we need to track the index, therefore we used an Array Of Array
->        Note:  You can also track with Object orderTrackObj[i + 1] = sum
- The first element in each Array is the index, while the second is the serve time
- Sum the Orderno + serve time to get the fulfillment time (t)
- Then we sort by the fulfilment time(t)
- We are to return index of the array orderTrackArr[element[0]] - Order by fulfilment time in ascending order
*/
