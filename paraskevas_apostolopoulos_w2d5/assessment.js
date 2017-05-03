/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.

** Examples:
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [0, 4], [1, 3] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

function divisibleByFivePairSum(array){
  var pairsOfIndices = [];
  // console.log(pairsOfIndices);
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array.length; k++) {
      if (i >= k) {
        continue;
      } else if ((array[i] + array[k]) % 5 === 0) {
        // console.log("check for slots evaluated: " + i + ", "+ k);
        pairsOfIndices.push([i,k]);
      }
    }
  }
  // console.log(pairsOfIndices);
  return pairsOfIndices;
}



/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)

** Examples:
** myIndexOf([1, 2, 3, 4, 5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  var positionOfElement = -1;
  for (var i = 0; i < array.length; i++) {
    // console.log("Check 1: Element to be evaluated: " + i);
    if (ele !== array[i]) {
      continue;
    } else {
      positionOfElement = i;
    }
  }
  // console.log(positionOfElement);
  return positionOfElement;
}

/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string (sentence)
** and an object (cipher). Return a string where every character is replaced with its
** corresponding value in the cipher. In other words, key-value pairs in the
** cipher are defined such that the key is the character to be replaced by the
** value character. If the character doesn't exist in the cipher, use the original
** character in the sentence. See the examples.

** Examples:
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher) {
  var newString = "";
  var splitString = sentence.split("");
  for (var i = 0; i < splitString.length; i++) {
      if (cipher[splitString[i]] === splitString[i]) {
        newString = sentence.split(splitString[i]).join(cipher[k]);
      }
  }
  console.log(newString);
}

//Solution from B
function magicCipher(sentence, cipher) {
  var sentArray = sentence.split("");
  var magicString = "";
  for (var i = 0; i < sentArray.length; i++) {
    if(cipher[sentArray[i]] !== undefined) {
      sentArray[i] = cipher[sentArray[i]];
    }
  }
  magicString = sentArray.join("");
  return magicString;
}


//Solution from Anthony
function magicCipher(sentence, cipher){
  // your code here...
  var decoded = "";

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    var decodedChar = cipher[char] || char;
    decoded += decodedChar;
  }

  return decoded;
}


/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Examples:
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/

function minMaxDifference(array) {
  var i = 1;
  var max = array[0];
  var min = array[0];
  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
    i++
  }
  return max - min;
}

/******************************************************************************
** Write a function that #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.

** Examples:
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/

function dynamicFizzBuzz(max, num1, num2){
  var dynamicArray = [];
  for (var i = 0; i < max; i++) {
    if ((i % num1 === 0) && (i % num2 !== 0)) {
      dynamicArray.push(i);
    } else if ((i % num1 !== 0) && (i % num2 === 0)) {
      dynamicArray.push(i);
    }
  }
  return dynamicArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
