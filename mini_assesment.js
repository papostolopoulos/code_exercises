
/******************************************************************************
Write myForEach(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return undefined.
Example:
> myForEach([1,2,3], function(ele, idx, arry) { console.log(ele, idx, arry); });
1 0 [1, 2, 3]
2 1 [1, 2, 3]
3 2 [1, 2, 3]
undefined // return value
******************************************************************************/

function myForEach(arr,cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

myForEach([1,2,3], function(ele, idx, arry) { console.log(ele, idx, arry); });
/******************************************************************************
Write myMap(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return a new array where
each element in the new array is the return value of the callback.
Use Array#forEach.
Example:
> myMap([1,2,3], function(ele, idx, arry) { return ele + idx; });
[1, 3, 5]
******************************************************************************/

function myMap(arr, cb) {
  var cbValueArray = [];
  arr.forEach(function(ele, idx, arry) {
    cbValueArray.push(cb(ele, idx, arry));
  });
  return(cbValueArray);
}

myMap([1,2,3], function(ele, idx, arry) {
  return ele + idx;
}); //[1, 3, 5]

/******************************************************************************
Write mySelect(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return a new array containing
all the elements of arr for which the given calback returns a truthy value.
Use Array#forEach.
Examples:
> mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 === 0; });
[2]
> mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 !== 0; });
[1, 3]
******************************************************************************/

function mySelect(arr, cb) {
  var newEleArray = [];
  arr.forEach(function(ele, idx, arry) {
    if (cb(ele, idx, arry)) {
      newEleArray.push(ele);
    }
  });
  return newEleArray;
}

mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 === 0; }); //[2]
mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 !== 0; }); //[1, 3]
/******************************************************************************
Write multipyN(num) which takes a number num and returns a function which takes an argument
and returns that argument multiplied by num.
Example:
> var multiplyTen = multiplyN(10);
> multiplyTen;
[Function]
> multiplyTen(35)
350
******************************************************************************/

function multiplyN(num) {
  return num;
}


function multiplier(multiNum) {
  return multiNum * multiplyN(num)
}

//solution from Winnie
function multiplyN(num) {
  var f = function(arg) {
    var product = arg * num;
    return product;
  }
  return f;
}

var multiplyTen = multiplyN(10);
multiplyTen(35);
