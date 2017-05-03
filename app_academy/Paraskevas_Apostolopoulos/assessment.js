/******************************************************************************
** Write a function #royalWe(sentence) that returns an string where every 'I'
** is replaced with 'we', every 'mine' is replaced with 'ours', every 'my' is replaced with 'our',
** and every 'me' is replaced with "us".

** Examples:
** royalWe("I want to go to the store.") //=> "we want to go to the store."
** royalWe("This is my house and you will respect me!") //=> "This is our house and you will respect us!"
** royalWe("This is mine...") //=> "This is ours..."
** royalWe("Jump for my love") //=> "Jump for our love"
*/

function royalWe(sentence) {
  splitSentence = sentence.split(" ");
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].slice(splitSentence[i].length - 3, splitSentence[i].length) === "...") {
      splitSentence[i] = splitSentence[i].slice(0, splitSentence[i].length - 3);
      console.log(splitSentence[i]);
    }
  }
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].slice(splitSentence[i].length - 1, splitSentence[i].length) === "!") {
      splitSentence[i] = splitSentence[i].slice(0, splitSentence[i].length - 1);
      console.log(splitSentence[i]);
    }
  }
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].slice(splitSentence[i].length - 1, splitSentence[i].length) === ".") {
      splitSentence[i] = splitSentence[i].slice(0, splitSentence[i].length - 1);
      console.log(splitSentence[i]);
    }
  }
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i] === "I") {
      splitSentence[i] = "we";
    }
    else if (splitSentence[i] === "mine") {
      splitSentence[i] = "ours";
    }
    else if (splitSentence[i] === "my") {
      splitSentence[i] = "our";
    }
    else if (splitSentence[i] === "me") {
      splitSentence[i] = "us";
    }
  }
  if (sentence.slice(sentence.length - 3, sentence.length) === "...") {
    return(splitSentence.join(" ") + "...");
  }
  else if (sentence.slice(sentence.length - 1, sentence.length) === "!") {
    return(splitSentence.join(" ") + "!");
  }
  else if (sentence.slice(sentence.length - 1, sentence.length) === ".") {
    return(splitSentence.join(" ") + ".");
  }
  else {
    return(splitSentence.join(" "));
  }
}

royalWe("I want to go to the store."); //=> "we want to go to the store."
royalWe("This is my house and you will respect me!"); //=> "This is our house and you will respect us!"
royalWe("This is mine..."); //=> "This is ours..."
royalWe("Jump for my love"); //=> "Jump for our love"

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

function elementCount(array) {
  var countsArray = {};
  for (var i = 0; i < array.length; i++) {
    if (countsArray[array[i]] === undefined) {
      countsArray[array[i]] = 1;
    }
    else if (countsArray[array[i]] !== undefined) {
      countsArray[array[i]] += 1;
    }
  }
  return countsArray;
}

/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.

** Examples:
** reverseRange(2, 7) //=> [ 6, 5, 4, 3 ]
** reverseRange(4, 2) //=> []
*/

function reverseRange(start, end) {
  var reversedNumbers = []
  if (start > end) {
    return reversedNumbers;
  }
  for (var i = end - 1; i > start; i--) {
    reversedNumbers.push(i);
  }
  return reversedNumbers;
}

function reverseRange(start, end) {
  var reversedNumbers = []
  if (start > end) {
    return reversedNumbers;
  }
  for (var i = start + 1; i < end; i++) {
    reversedNumbers.unshift(i);
  }
  return reversedNumbers;
}

reverseRange(2, 7); // => [ 6, 5, 4, 3 ]
reverseRange(4, 2); // => []

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed.

** Examples:
** reverseSentence("Go to the store") \\=> "store the to Go"
** reverseSentence("Jump, jump for joy") \\=> "joy for jump Jump,"
*/

function reverseSentence(sentence) {
  var splitSentence = sentence.split(" ");
  var flippedSentence = [];
  for (var i = splitSentence.length - 1; i >= 0; i--) {
    flippedSentence.push(splitSentence[i])
  }
  return flippedSentence.join(" ");
}

function reverseSentence(sentence) {
  var splitSentence = sentence.split(" ");
  var flippedSentence = [];
  for (var i = 0; i < splitSentence.length; i++) {
    flippedSentence.unshift(splitSentence[i]);
  }
  return flippedSentence.join(" ");
}

reverseSentence("Go to the store") //=> "store the to Go"
reverseSentence("Jump, jump for joy") //=> "joy for jump Jump,"

/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

** Example:
** magicNumbers(20) \\=> [ 4, 6, 8, 16, 18, 20 ]
*/

//Same like fizzBuzz but with different numbers

function magicNumbers(max) {
  var numberRange = [];
  for (var i = 1; i <= max; i++) {
    if (i % 4 === 0 && i % 6 !== 0) {
      numberRange.push(i);
    }
    else if (i % 6 === 0 && i % 4 !== 0) {
      numberRange.push(i);
    }
  }
  return(numberRange);
}

magicNumbers(20); // => [ 4, 6, 8, 16, 18, 20 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
