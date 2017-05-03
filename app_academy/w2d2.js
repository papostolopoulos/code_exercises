/* divisibleByThreePairSum

Write a function divisibleByThreePairSum(array) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of three.

> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]] */
function divisibleByThreePairSum(array) {

}

function divisibleByThreePairSum(array) {
  var pairsOfIndices = [];
  for (var i = 0; i < array.length; i++) {
    //console.log("checkpoint1: " + pairsOfIndices);
    for (var j = 0; j < array.length; j++) {
      //console.log("checkpoint2: " + pairsOfIndices);
      if (i >= j) {
        continue;
      } else if ((array[i] + array[j]) % 3 === 0) {
        pairsOfIndices.push([i,j]);
      }
    }
  }
  return pairsOfIndices;
}

//Alternative solution
function divisibleByThreePairSum(array) {
  var pairsOfIndices = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = i+1; k < array.length; k++) {
      if ((array[i] + array[k]) % 3 === 0) {
        pairsOfIndices.push([i, k]);
      }
    }
  }
  return pairsOfIndices;
}


/* Sometimes you will need to nest a loop inside of another loop.
Let's say we are given an array and have to return the indices of all pair of elements that sum to 0.
This means we we will have to add each element to the other elements in the array.

> pairZero([4, 1, 0,])
[ ]
> pairZero([1, 2, -1])
[ [0, 2] ]
> pairZero([0, 2, 5, -2, 0])
[ [0, 4], [1, 3] ] */

function pairZero(array) {
  var pairsOfIndices = [];
  for (var i = 0; i < array.length; i++) {
    console.log("checkpoint1: " + pairsOfIndices);
    for (var j = 0; j < array.length; j++) {
      console.log("checkpoint2: " + pairsOfIndices);
        if (i >= j) {
          continue;
        } else if ((array[i] + array[j]) === 0) {
        console.log("checkpoint3: " + pairsOfIndices);
        pairsOfIndices.push([i,j]);
      }
    }
  }
  return pairsOfIndices;
}

//Alternative solution
function pairZero(array) {
  var pairsOfIndices = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
      if (array[i] + array[k] === 0) {
        pairsOfIndices.push([i,k])
      }
    }
  }
  return pairsOfIndices;
}


/* isValidEmail

Write a function isValidEmail(email) that takes an email string. Return true if the email is considered valid. A valid email:
Contains one and only one "@" symbol
All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
There is one and only one dot "." after the "@" symbol
Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];

  >isValidEmail("junk@gmail.com"); --> true
>isValidEmail("now.what@now.co"); --> true
>isValidEmail("i_am_happy@feelings.net"); --> true
>isValidEmail("my@website@gmail.com"); --> false
>isValidEmail("webby@gmail.co.net"); --> false
>isValidEmail("anthony@ira_ladson.com"); --> false
>isValidEmail("anthony!@ladson.com"); --> false */

function isValidEmail(email) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [ "1","2","3","4","5","6","7","8","9","0"];
  var abc123UndscrDt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "1","2","3","4","5","6","7","8","9","0",
  "_","."];
  // Spliting the email at the @ symbol. If more than two pieces, that is invalid
  var splitEmail = email.split("@");
  if (splitEmail.length !== 2) {
    return false;
  }
  // Spliting the email part before the at symbol. If there are characters other than the ones defined in the abc123UndscrDt then false
  var splitBeforeAt = splitEmail[0].split("");
  for (var i = 0; i < splitBeforeAt.length; i++) {
    if (abc123UndscrDt.indexOf(splitBeforeAt[i]) === -1) {
      return false;
    }
  }
  // Spliting the domain.com part of the email in the "." symbol. If more than two pieces, that is invalid
  var splitAfterAt = splitEmail[1].split(".");
  for (var k = 0; k < splitAfterAt.length; k++) {
    if (splitAfterAt.length !== 2) {
      return false;
    }
  }
  // Spliting the domain (without the .com part). If characters other than the alphabet exist then it is invalid
  var textBeforeLastDot = splitAfterAt[0].split("");
  for (var m = 0; m < textBeforeLastDot.length; m++) {
    if (alphabet.indexOf(textBeforeLastDot[m]) === -1) {
      return false;
    }
  }
  return true;
}

/* peakFinder

Write a function peakFinder(array) that takes in an array of numbers.
It should return an array containing the indices of all the peaks.
A peak is an element that is greater than both of its neighbors.
If it is the first or last element, it is a peak if it is greater than its one neighbor.
Assume the array has a length of at least 2.

>peakFinder([1,2,3,2,1])
[2]
>peakFinder([2,1,2,3,4,5])
[0, 5]
>peakFinder([4,6,9,4,2,-7,2,-4,5])
[2,6,8] */

//Solution without defining any variables for +1 and -1
function peakFinder(array) {
  var peaks = [];
  if (array[0] > array[1]) {
    peaks.push(0);
  }
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i+1] && array[i] > array[i-1]) {
      peaks.push(i);
    }
  }
  if (array[array.length-1] > array[array.length-2]) {
    peaks.push(array.length-1);
  }
  return peaks;
}

//Big solution done before looking at the solutions in github
function peakFinder(array) {
  var peaks = [];
  if (array[0] > array[1]) {
    peaks.push(0)
  }
  // console.log("peaks status 1: " + peaks);
  for (var i = 1; i < array.length; i++) {
    // console.log("peaks status 2: " + peaks);
    for (var k = i+1; k < array.length; k++) {
      // console.log("peaks status 3: " + peaks + " |i: " + i + " |k: " + k + " |m: " + m);
      for (var m = k+1; m < array.length; m++) {
        // console.log("peaks status 4: " + peaks + " |i: " + i + " |k: " + k + " |m: " + m);
        if ((array[k] > array[i]) && (array[k] > array[m]) && i === k-1 && k === m-1) {
          peaks.push(k);
          // console.log("peaks status 5: " + peaks + " |i: " + i + " |k: " + k + " |m: " + m);
        }
      }
    }
  }
  if (array[array.length-1] > array[array.length-2]) {
    peaks.push(array.length-1);
    // console.log("peaks status 6: " + peaks);
  }
  return peaks;
}
