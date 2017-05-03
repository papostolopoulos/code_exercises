/******************************************************************************
** Write a function #range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order
** Example
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
  if (start > end) {
    return [];
  }
  var pushedNumbers = [];
  for (i = start; i <= end; i += 1) {
    pushedNumbers.push(i);
  }
  return pushedNumbers;
}

//solution from Winnie
function range(start, end){
  if (start > end) {
    return [];
  }
  var rangeArray = [];
  var i = start;
  while (i <= end) {
    rangeArray.push(i);
  }
  return rangeArray;
}

/******************************************************************************
** Write a function #unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining is
** unique.
** Example
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
unique([1, 8, 2, 5, 3, 3, 8, 42, 31, 33, 31])
*/

function unique(array) {
  var nonDupesVar = [];
  for (var i = 0; i < array.length; i++) {
    if (nonDupesVar.indexOf(array[i]) === -1) {
      nonDupesVar.push(array[i]);
    }
  }
  return nonDupesVar;
}

// Solution from Winnie
function unique(array) {
  var uniqArray = [];

  for (var i = 0; i < array.length; i++) {
    if (uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/



function elementCount(array){
  var counter = {};
  for (var i = 0; i < array.length; i++) {
    var currElement = array[i];
    if (counter[currElement] === undefined) {
      counter[currElement] = 1;
    } else {
    counter[currElement]++;
    }
  }
  return counter;
}

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed
** Example
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/

function reverseSentence(sentence) {
  var reversedWords = [];
  var splitSentence = sentence.split(" ");
  console.log(splitSentence)
  for (var i = splitSentence.length - 1; i >= 0; i--) {
    reversedWords.push(splitSentence[i]);
  }
  return reversedWords.join(" ");
}



//Solution from Winnie
function reverseSentence(sentence){
  var words = sentence.split(" ");
  var reversedWords = [];
  for (var i = 0; i < words.length; i++) {
    reversedWords.unshift(words[i]);
  }
  return reversedWords.join(" ");
}

/******************************************************************************
** Write a function that #fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18, 20]
*/

function fizzBuzz(max) {
  var divisibleNumbers = [];
  for (var i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      divisibleNumbers.push(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      divisibleNumbers.push(i);
    }
  }
  return divisibleNumbers;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
