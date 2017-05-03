/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects).

** DO NOT USE Array.prototype.indexOf

** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  for (var i = 0; i < array.length; i++) {
    var numberComparison = array[i];
    if (numberComparison === ele) {
      return i;
    }
  }
  return -1;
}

/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Example
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){
  var min = array[0];
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    else if (max < array[i]) {
      max = array[i];
    }
  }
  return min * max;
}

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2){
  if (num1 === 2 || num2 === 2) {
    return num1 * num2
  }
  else if (num1 % 2 === 0) {
    return (num1 / 2) * num2;
  }
  else if (num2 % 2 === 0) {
    return (num2 / 2) * num1;
  }
  else {
    return num1 * num2;
  }
}

/******************************************************************************
** Write a function `hipsterfy(sentence)` that takes takes a string containing
** several words as input. Remove the last vowel from each word. 'y' is not a vowel.

** Example
** hipsterfy("proper") => "propr"
** hipsterfy("proper tonic panther") => "propr tonc panthr"
** hipsterfy("towel flicker banana") => "towl flickr banan"
** hipsterfy("runner anaconda") => "runnr anacond"
** hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"
*/

//Solution from Paris with one function and two for loops
function hipsterfy(sentence){
  var splitSentence = sentence.split(" ");
  var vowels = ["a","e","i","o","u"];
  var newSentence = [];
  for (var i = 0; i < splitSentence.length; i++) {
    var word = splitSentence[i];
    for (var k = word.length - 1; k >=0 ; k--) {
      // console.log(word[k]);
      if (vowels.indexOf(word[k]) !== -1) {
      // console.log("word[k] is: " + word[k]);
      word = word.slice(0,k) + word.slice(k+1);
      // console.log("word before the break is: " + word);
      break;
      }

    }
    newSentence.push(word);
  }
  return newSentence.join(" ");
}

//Solution from Winie with two functions
// function hipsterfy(sentence) {
//   var words = sentence.split(" ");
//   var hipsterfied = [];
//   for (var i = 0; i < sentence.length; i++) {
//     var hipsterfiedWord =  hipsterfyWord(words[i]);
//     hipsterfied.push(hipsterfiedWord);
//   }
//
//   return hipsterfied.join(" ");
// }
//
// function hipsterfyWord {
//   var vowels = ["a","e","i","o","u"];
//   for (var i = word.length - 1; i >= 0; i++) {
//     if(vowels.indexOf(word[i]) !== -1) {
//       return word.slice(0,i) + word.slice(i+1);
//     }
//   }
// }




/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/


// //solution from Anthony
// function magicCipher(sentence, cipher){
//   var decoded = "";
//   for (var i = 0; i < sentence.length; i++) {
//     var decodedChar = cipher[sentence[i]] || sentence[i];
//     decoded += decodedChar;
//   }
//   return decoded;
// }

//solution after altering the above in order to make more sense to me
function magicCipher(sentence, cipher){
  var magicSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    if (cipher[sentence[i]]) { //itterates through all the keys. If the values are true (not the keys) then...
      magicSentence += cipher[sentence[i]];
    }
    else {
      magicSentence += sentence[i];
    }
  }
  return magicSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  hipsterfy : hipsterfy
};
