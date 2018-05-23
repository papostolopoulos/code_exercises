"use strict"

/*20180523
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

function biggerTogether(array) {
  if (array.length === 1) return 0;
  // first sort the Array 
  // while the last element of the array does not have a length of 1 (to string)
  // unshift the last element after spliting it AND
  // pop out the last elements
  //
  // then sort, convert to numbers, merge and do the substraction
}

biggerTogether([1,2,3,4]); // == 3087 // 4321 - 1234
biggerTogether([1,2,3,4, 11, 12]); // == 32099877 // 43212111 - 11112234
biggerTogether([0, 1]); // == 9 // 10 - 01
biggerTogether([100]); // == 0 // 100 - 100
