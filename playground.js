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


//Initial submition that does not work for last problem
function biggerTogether(arr) {
  if (arr.length === 1) return 0;
  return arr.sort().reverse().join('') - arr.sort().join('');
}







function biggerTogether(arr) {
  if (arr.length === 1) return 0;

  arr.sort((a,b) => a-b);
  while (arr[arr.length-1].toString().length > 1) {
    arr.unshift(...arr[arr.length-1].toString().split(""));
    arr.pop();
  }
  let smallNum = Number(arr.sort((a,b) => a-b).join(""));
  let bigNum = Number(arr.sort((a,b) => b-a).join(""));
  console.log("smallNum:", smallNum);
  console.log("bigNum:",bigNum);

  return bigNum - smallNum;
}





function biggerTogether(arr) {
  if (arr.length === 1) return 0;

  let smallNum = arr.sort().slice();
  let bigNum = arr.sort().reverse().slice();
  console.log("smallNum:", smallNum);
  console.log("bigNum:",bigNum);
  smallNum.sort((a,b)=>{
    console.log(a, b);
    if (a.toString() < b.toString() && a.toString()[0] === b.toString()[b.toString().length - 1]) {
      console.log("in if");
      return b-a;
    }
  });
  bigNum.sort((c,d)=>{
    if (c.toString() > d.toString() && c.toString()[0] === d.toString()[d.toString().length - 1]) {
      console.log("in if for big");
      return c-d;
    }
  });
  console.log("smallNum after second sorting:", smallNum);
  console.log("bigNum after second sorting:",bigNum);
  return bigNum.join("") - smallNum.join("");
}

// if two digit number is larger than one digit number and num[0] === num[0]
// then switch them


function biggerTogether(arr) {
  if (arr.length === 1) return 0;

  let smallNum = arr.sort()
  .sort((a,b)=>{
    if (a.toString()[0] === b.toString()[0]
    && a < b
    && a.toString()[0] < b.toString()[b.toString().length - 1]) return a-b;
    else if (a.toString()[0] === b.toString()[0]
    && a < b
    && a.toString()[0] > b.toString()[b.toString().length - 1]) return b-a;
  })
  .slice()
  .join("");

  let bigNum = arr.sort()
  .reverse()
  .sort((a,b)=>{
    if (a.toString()[0] === b.toString()[0]
    && a > b
    && a.toString()[1] < b.toString()[b.toString().length - 1]) return a-b;
    else if (a.toString()[0] === b.toString()[0]
    && a > b
    && a.toString()[0] > b.toString()[b.toString().length - 1]) return b-a;
  })
  .slice()
  .join("");

  return bigNum - smallNum;
}


arr2.sort().reverse().sort(function(a,b) {
  console.log("before if", a, b);
  if (a.toString()[0] === b.toString()[0] && a > b && a.toString()[1] < b.toString()[b.toString().length - 1]) {
    console.log("In if for a", a, "and b", b);
    return a-b;
  }
  else if (a.toString()[0] === b.toString()[0] && a > b && a.toString()[0] > b.toString()[b.toString().length - 1]) {
    return b-a;
  }

});





var arr = [1,2,3,4, 11, 12];
// after sort --> [1, 11, 12, 2, 3, 4]
var arr2 = [3,12,22,32];
// after sort --> [12, 22, 3, 32]
var arr3 = [420,42,423];
// after sort --> [42,420,423];

arr2.sort().reverse().sort((a,b)=>{
  console.log("before if", a, b);
  if (a < b) {
    if (a.toString().length < b.toString().length) {
      if (a.toString() > b.toString().slice(b.toString().length - a.toString().length)) {
        return b - a;
      }
      else if (a.toString() < b.toString().slice(b.toString().length - a.toString().length)) {
        return a - b;
      }
    }
    else {
      if (a+b < b+a) return a-b;
      else return b-a;
    }
  }


  else if (a > b) {
    if (a.toString().length > b.toString().length){
      if (a.toString().slice(a.toString().length - b.toString().length) < b.toString()) {
        return a - b;
      }
      else if (a.toString().slice(a.toString().length - b.toString().length) > b.toString()) {

      }
    }
    else {
      if (a+b > b+a) return a - b;
      else return b - a;
    }
  }
});




arr2.sort().reverse().sort((a,b)=>{
  console.log("before if", a, b);
  if (a < b && a.toString() === b.toString().slice(0, a.toString().length)) {
    if (a.toString()[a.toString().length - 1] < b.toString()[b.toString().length - 1]) {
      console.log("In if for a", a, "and b", b);
      return a-b;
    }
    else if (a.toString()[a.toString().length - 1] > b.toString()[b.toString().length - 1]) {
      console.log("In else if for a", a, "and b", b);
      return b-a;
    }
  }
  else if (a > b && a.toString().slice(0, b.toString().length) === b.toString()) {
    if (a.toString()[a.toString().length - 1] < b.toString()[b.toString().length - 1]) {
      console.log("In second if for a", a, "and b", b);
      return b - a;
    }
    else if (a.toString()[a.toString().length - 1] > b.toString()[b.toString().length - 1]) {
      console.log("In second else if for a", a, "and b", b);
      return a - b;
    }
  }

});


biggerTogether([1,2,3,4]); // == 3087 // 4321 - 1234
biggerTogether([1,2,3,4, 11, 12]); // == 32099877 // 43212111 - 11112234
biggerTogether([0, 1]); // == 9 // 10 - 01
biggerTogether([100]); // == 0 // 100 - 100
biggerTogether([3,12,22,32]); // == 2099889 // 3 32 22 12 - 12 22 32 3
biggerTogether([420,42,423]); // == 381078 // 42 423 420 - 420 423 42
