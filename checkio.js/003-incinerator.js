"use strict"

/*20180523
MERGE INTERVALS https://js.checkio.org/station/incinerator/
You are given a sequence of intervals, as tuples of ints where
the tuples are sorted by their first element in ascending order.
It is your task to minimize the number of intervals by merging
those that intersect or by removing intervals fitting into another one.

Since the range of values for the intervals is restricted to integers,
you must also merge those intervals between which no value can be found.

An example:
Let's say you've got these 5 intervals: 1..6, 3..5, 7..10, 9..12 and 14..16.

1..6 and 3..5
3..5 fits into 1..6, so 3..5 must disappear.
1..6 and 7..10
Even though the intervals do not intersect, there can not be a value of type int
between them, so they have to be merged to the new interval 1..10.
1..10 and 9..12
These intervals do intersect, because 9 < 10, so they have to be merged to the new interval 1..12.
1..12 and 14..16
These two intervals do not intersect, so they must not be merged.
So the intervals to be returned are:
1..12 and 14..16
Input: A sequence of intervals as a Array of Arrays of 2 ints, sorted by their first element.
Output: The merged intervals as a list of tuples of 2 ints, sorted by their first element.

Examples:
mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]) == [[1, 6], [8, 10], [12, 19]]
mergeIntervals([[1, 12], [2, 3], [4, 7]]) == [[1, 12]]
mergeIntervals([[1, 5], [6, 10], [10, 15], [17, 20]]) == [[1, 15], [17, 20]]
*/

function mergeIntervals(arr) {

  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1][1] - arr[i][0] >= -1) {
      arr[i-1].push(...arr[i]);
      arr[i-1] = arr[i-1].sort((a,b) => a-b)
      .filter((el, idx, ary) => el === ary[0] && idx === 0 || el === ary[ary.length-1] && idx === ary.length-1);
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

//Better solution after looking at other people's solutions (forgot about min, max)
function mergeIntervals(arr) {

  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1][1] - arr[i][0] >= -1) {
      arr[i-1].push(...arr[i]);
      arr[i-1] = [Math.min(...arr[i-1]), Math.max(...arr[i-1])];
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}


mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]); // == [[1, 6], [8, 10], [12, 19]]
mergeIntervals([[1, 12], [2, 3], [4, 7]]); // == [[1, 12]]
mergeIntervals([[1, 5], [6, 10], [10, 15], [17, 20]]); // == [[1, 15], [17, 20]]


/*20180527
BIGGER TOGETHER https://js.checkio.org/en/mission/bigger-together/
Your mission here is to find a difference between the maximally positive
and maximally negative numbers. Those numbers can be found by concatenating
the given array of numbers.

Let’s check an example. If you have numbers 1,2,3, then 321 is the maximum number,
and 123 - is the minimum.
The difference between those numbers is 198. But if you have numbers 4, 3 and 12
then 4312 is the maximum number, and 1234 - is the minimum.
As you can see, a simple order is not what we are looking for here.

Input: List of positive integers.
Output: Integer.

Example:
biggerTogether([1,2,3,4]) == 3087 // 4321 - 1234
biggerTogether([1,2,3,4, 11, 12]) == 32099877 // 43212111 - 11112234
biggerTogether([0, 1]) == 9 // 10 - 01
biggerTogether([100]) == 0 // 100 - 100
*/


//Initial submition that does not work for last problem
function biggerTogether(arr) {
  if (arr.length === 1) return 0;
  return arr.sort().reverse().join('') - arr.sort().join('');
}

//This one works
//(check the one from the internet so you can cry - In sort: (a+b)-(b+a))
function biggerTogether(arr) {
  if (arr.length === 1) return 0;
  let zeroArr = [];
  while(arr.indexOf(0) !== -1) (zeroArr.push(arr.indexOf(0)), arr.splice(arr.indexOf(0),1))

  let sorting = arr.sort((a,b)=>{
    let aToS = a.toString(), bToS = b.toString();
    if (a < b) {
      if (aToS.length < bToS.length) {
        if (aToS + bToS.slice(0,bToS.length - aToS.length) < bToS) return a - b;
        else if (aToS + bToS.slice(0,bToS.length - aToS.length) > bToS) return b - a;
      }
      else return aToS+bToS < bToS+aToS ? a-b : b-a;
    }
  });

  let zeroes = zeroArr.join('');
  let smallNum = sorting.slice().join('');
  let bigNum = sorting.slice().reverse().join('') + zeroes;
  return bigNum - smallNum;
}


//From the Internet
function biggerTogether(ints) {
  let ns = ints.map(i => i.toString());
  ns.sort((x, y) => parseInt(x + y) - parseInt(y + x));
  return parseInt(ns.slice().reverse().join('')) - parseInt(ns.join(''));
}

// And another one
function biggerTogether(ints) {

    const strs = ints.map((x)=>x.toString());

    strs.sort((a, b)=>parseInt(a+b, 10)-parseInt(b+a, 10));

    const small = parseInt(strs.join(''), 10);
    const big = parseInt(strs.reverse().join(''), 10);

    return big - small;
}



biggerTogether([1,2,3,4]); // == 3087 // 4321 - 1234
biggerTogether([1,2,3,4, 11, 12]); // == 32099877 // 43212111 - 11112234
biggerTogether([0, 1]); // == 9 // 10 - 01
biggerTogether([100]); // == 0 // 100 - 100
biggerTogether([3,12,22,32]); // == 2099889 // 3 32 22 12 - 12 22 32 3
biggerTogether([420,42,423]); // == 381078 // 42 423 420 - 420 423 42
biggerTogether([0,1,2,3,4,5,6,7,8,9,10]); // == 977530864311 // 9 8 7 6 5 4 3 2 1 10 0 - 0 10 1 2 3 4 5 6 7 8 9
