/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n.

Use Array#forEach.

Examples:
> countAdjacentSums([1, 5, 1], 6)
2
> countAdjacentSums([7, 2, 4, 6], 7)
0
> countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)
3
******************************************************************************/
function countAdjacentSums(arr, n){
  var counter = 0;
  arr.forEach(function(ele,idx,arr) {
    arr.forEach(function(el,id,ar) {
    if (ele + el === n && idx + 1 === id) {
        counter += 1;
      }
    });
  });
  return counter;
}

countAdjacentSums([1, 5, 1], 6); //2

countAdjacentSums([7, 2, 4, 6], 7); //0

countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13); //3
/******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters in the `str`
that are in the `searchLetters`.

Example
longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
******************************************************************************/
function longestLetterStreak(str, searchLetters){
  //your code here...
  // two counters are set
  // two if statements in a loop
  // One counter is used to add the occurences of the letters wanted.
  // the second one which is the one returned at the end is compared at every loop. If smaller than the first counter,
  // then it becomes equal to the first counter
  // if we encounter a letter other than the ones in search, then the counter's score becomes 0 and the counter counting starts again
  // when we find a new letter that belongs in the array of letters we need.
  //
}

//I do not understand this question based on the examples.

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonants, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples:
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowels, just add "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitalized must remained caplitalized
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay
> inPigLatin("let us Dance")
etlay usyay Anceday
> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/
function inPigLatin(sentence){
  var vowels = ["a", "e", "i", "o", "u"];
  var wordsEval = []
  var finalSentence = []
  splitSentence = sentence.split(" ");
  splitSentence.forEach(function(ele) {
    wordsEval.push(ele);
  });

  wordsEval.forEach(function(ele, idx, arr) {
    if (vowels.indexOf(ele[0]) !== -1) {
      finalSentence.push(ele + "yay");
    }
    else {
      var counter = 0;
      for (var i = 0; i < ele.length; i++) {
        if (vowels.indexOf(ele[i]) !== -1) {
          counter +=1;
          finalSentence.push(ele.slice(ele[i + 1]) + ele.slice(0,ele[i]) + "ay");
        }
      }
    }
  });
  return finalSentence.join(" ");
}

inPigLatin("Shmanthony is the best teacher"); //Anthonyshmay isyay ethay estbay eachertay
inPigLatin("let us Dance"); //etlay usyay Anceday
inPigLatin("this is the time of my life"); //isthay isyay ethay imetay ofyay myay ifelay

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  countAdjacentSums : countAdjacentSums,
  longestLetterStreak : longestLetterStreak
};
