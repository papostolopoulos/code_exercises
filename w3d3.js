/* Finish Clock Project!

Higher-Order Functions
Write a function myForEach(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built-in Array.prototype.forEach method. The return value is irrelevant.

> myForEach([1,2,3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..});
1 is at position 0 in array [1,2,3]
2 is at position 1 in array [1,2,3]
3 is at position 2 in array [1,2,3] */

function myForEach(arr, cb) {
  arr.forEach(function(ele, idx, arr){
    cb(ele, idx, arr);
  });
}

var myForEach = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
    // console.log(arr[i] + " is at position " + i + " in array " + arr);
  }
}

myForEach([1,2,3], function(ele, i, arr){
  console.log(ele + " is at position " + i + " in array " + arr);
});

/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns true.

> mySelect([1,2,3,4,5,6], function(ele, i, arr){
..  return (ele % 2 === 0);
..});
[2,4,6]

> mySelect([1,2,3,4,5,6], function(ele, i, arr){
..  return (i % 2 === 0);
..});
[1,3,5] */

function mySelect(arr, cb) {
  var newArray = [];
  arr.forEach(function(ele,idx,arr){
    if (cb(ele,idx,arr)) {
      newArray.push(ele);
    }
  });
  return newArray;
}

var mySelect = function(arr, cb) {
  var newEleArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newEleArray.push(arr[i]);
    }
  }
  console.log(newEleArray);
}

mySelect([1,2,3,4,5,6], function(ele, i, arr){
  return(ele % 2 === 0);
}); //[2,4,6]
//--------------------------------
console.log("----------------------------------");


var mySelect1 = function(arr, cb) {
  var newIdxArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newIdxArray.push(arr[i]);
    }
  }
  console.log(newIdxArray);
}

mySelect([1,2,3,4,5,6], function(ele, i, arr){
  return(i % 2 === 0);
}); //[1,3,5]
//---------------------------
console.log("----------------------------------");


var mySelect2 = function(arr,cb) {
  var newAltArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(cb(arr[i], i, arr)) {
      newAltArray.push([arr[i], i]);
    }
  }
  console.log(newAltArray);
}

var cb = function(ele, i, arr) {
  return(ele % 2 === 0);
}

mySelect2([1,2,3,4,5,6,7,8,9,10], cb);

console.log("----------------------------------");

/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns false.

> myReject([1,2,3,4,5,6], function(ele, i, arr){
..  return (ele % 2 === 0);
..});
[1,3,5]

> myReject([1,2,3,4,5,6], function(ele, i, arr){
..  return (i % 2 === 0);
..});
[2,4,6] */

function myReject(arr, cb) {
  var newArray = [];
  arr.forEach(function() {
    if (cb(ele, idx, arr) === false) {
      newArray.push(ele);
    }
  });
  return newArray;
}

var myReject = function(arr, cb) {
  var arrFalseElements = []
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      arrFalseElements.push(arr[i]);
    }
  }
  console.log(arrFalseElements);
}

var cb = function(ele, i, arr) {
return(ele % 2 !== 0);
}

myReject([1,2,3,4,5,6], cb);

console.log("----------------------------------------");
//---Alternative way
var myReject = function(arr, cb) {
var arrFalseElements = []
for (var i = 0; i < arr.length; i++) {
  if (cb(arr[i], i, arr) === false) {
    arrFalseElements.push(arr[i]);
  }
}
console.log(arrFalseElements);
}

var cb = function(ele, i, arr) {
return(ele % 2 === 0);
}

myReject([1,2,3,4,5,6], cb);

console.log("----------------------------------------");

var myReject2 = function(arr, cb) {
var arrFalseElements = []
for (var i = 0; i < arr.length; i++) {
  if (cb(arr[i], i, arr) === false) {
    arrFalseElements.push(arr[i]);
  }
}
console.log(arrFalseElements);
}

var cb = function(ele, i, arr) {
return(i % 2 === 0);
}

myReject2([1,2,3,4,5,6], cb);

/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of the callback given the element in the corresponding position.
See the examples if this is confusing.

> myMap([1,2,3], function(ele, i, arr){
..  return ele * 2;
..});
[2, 4, 6]

> myMap([1,2,3], function(ele, i, arr){
..  return ele + i;
..});
[1, 3, 5]

> myMap(["A", "B", "C"], function(ele, i, arr){
..  return ele + i;
..});
["A0", "B1", "C2"] */

function myMap(arr, cb) {
  var newArray = [];
  arr.forEach(function(ele, idx, arr) {
    newArray.push(cb(ele,idx));
  });
  return newArray;
}

var myMap = function(arr,cb) {
  var someArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      someArray.push(cb(arr[i], i, arr));
    }
  }
  return(someArray);
}

myMap([1,2,3], function(ele, i, arr){
  return(ele * 2);
});

console.log("---------------------------");

myMap([1,2,3], function(ele, i, arr){
  return(ele + i);
});

console.log("---------------------------");

myMap(["A", "B", "C"], function(ele, i, arr){
  return ele + i;
});

/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num and returns the value.
*/

function createExpFunc(num) {
  return function(num1) {
    return Math.pow(num1, num);
  }
}

var powerTwo = createExpFunc(2);
powerTwo(2); // 4
powerTwo(6); // 36

var powerThree = createExpFunc(3);
powerThree(2); // 8
powerThree(6); // 216

var powerTen = createExpFunc(10);
powerTen(2); // 1024
powerTen(6); // 60466176 
