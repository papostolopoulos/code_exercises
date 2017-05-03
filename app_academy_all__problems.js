/*21 Write a method that takes in a string and returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters.
Count the number of letters that repeat, not the number of times they repeat in the string.*/

function numRepeats(string) {
  var splitString = string.toLowerCase().split("");
  var objectLetters = {};
  var counter = 0;
  for (var i = 0; i < splitString.length; i++) {
    if (objectLetters[splitString[i]] === undefined) {
      objectLetters[splitString[i]] = 1;
    }
    else {
      objectLetters[splitString[i]] += 1;
    }
  }

  for (var key in objectLetters) {
    if (objectLetters[key] > 1) {
      counter += 1;
    }
  }

  console.log(objectLetters);
  return counter;
}

numRepeats("abdbc");// == 1
numRepeats("aaa");// == 1
numRepeats("abab");// == 2
numRepeats("cadac");// == 2
numRepeats("abcde");// == 0

/*20. Write a method that takes in an integer `offset` and a string.
Produce a new string, where each letter is shifted by `offset`.
You may assume that the string contains only lowercase letters and spaces.
When shifting "z" by three letters, wrap around to the front of the alphabet to produce the letter "c".

You'll want to use String's `ord` method and Integer's `chr` method.
`ord` converts a letter to an ASCII number code. `chr` converts an ASCII number code to a letter.
You may look at the ASCII printable characters chart: http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters

Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to 'z' having code 122.
You may also want to use the `%` modulo operation to handle wrapping of "z" to the front of the alphabet.
Difficulty: hard. Because this problem relies on outside information, we would not give it to you on the timed challenge. :-)*/

function caesarCipher(num, string) {
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var splitString = string.toLowerCase().split("");
var newString = [];
  for (var i = 0; i < splitString.length; i++) { //iterating through the original string
    if(alphabet.indexOf(splitString[i]) === -1) { //1 If the evaluated character is not in the alphabet array, then push it
      newString.push(splitString[i]);
    }
    else { //2
      if (alphabet.indexOf(splitString[i]) + num > alphabet.length - 1) { //3 If the number that sums the indexOf with the num
        //is larger than the alphabet's length
        newString.push(alphabet[alphabet.indexOf(splitString[i]) + num - alphabet.length]);
      }
      else { //4 regular push with the number being the sum of the splitString[i] + num
        newString.push(alphabet[alphabet.indexOf(splitString[i])+ num]);
      }
    }
  }
  return newString.join("");
}


caesarCipher(3, "abc");// == "def"
caesarCipher(3, "abc xyz");// == "def abc"

/*19. Write a method that takes in two numbers.
Return the greatest integer that evenly divides both numbers. You may wish to use the `%` modulo operation.*/

function greatestCommonFactor(num1, num2) {
  if (num2 % num1 === 0) {
    return num1;
  }
  else if (num2 % num1 !== 0) {
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
      return 1;
    }
    else if (num1 % 2 === 0 && num2 % 2 === 0) {
      return num2 % num1;
    }
    else if (num1 % 2 !== 0 && num2 % 2 === 0) {
      return num2 % num1;
    }
    else if (num1 % 2 === 0 && num2 % 2 !== 0) {
      return 1;
    }
  }
}

greatestCommonFactor(3, 9);// == 3
greatestCommonFactor(16, 24);// == 8
greatestCommonFactor(3, 5);// == 1

/*18. Write a method that takes in a string of lowercase letters (no uppercase letters, no repeats).
Consider the *substrings* of the string: consecutive sequences of letters contained inside the string.
Find the longest such string of letters that is a palindrome.
Note that the entire string may itself be a palindrome.
You may want to use Array's `slice(start_index, length)` method,
which returns a substring of length `length` starting at index `start_index`:*/

function longestPalindrome(string) {
  var splitString = string.toLowerCase().split("");
  var reversedString = [];
  var comparisonString = [];

  for (var i = 0; i < splitString.length; i++) {
    //comparing if the letter in the iteration is matched in the index of the rest of the letters in the array
    if (splitString.slice(i+1, splitString.length).indexOf(splitString[i]) !== -1) {
      for (var j = splitString.length - 1; j >= 0; j--) {
    //comparing if the letter in the iteration (starting from the end) is matched in the index of the rest of the letters in the array
    //but up to the letter in the first iteration. If so, then the comparisonString is given the array but in reverse an joined
        if(splitString.slice(i, j-1).indexOf(splitString[j]) !== -1) {
          comparisonString = splitString.slice(i,j+1).reverse().join("");
          //comparing if the comparison string is same as the original string and
          //if the comparison string's length is larger than the reversedString
          if (comparisonString === splitString.slice(i,j+1).join("") && comparisonString.length > reversedString.length) {
            reversedString = comparisonString;
          }
        }
      }
    }
  }
  return reversedString;
}

longestPalindrome("abcbd");// == "bcb"
longestPalindrome("abba");// == "abba"
longestPalindrome("abcbdeffe");// == "effe"

/*17. Write a method that returns the `n`th prime number. Recall that only
numbers greater than 1 can be prime.*/

function nthPrime(number) {
  var counter = 0;
  for (var i = 2; ; i++) {
    if(isPrime(i)) {
      counter +=1;
      if (counter === number) {
        return i;
      }
    }
  }
}

nthPrime(1);// == 2: ' + (nthPrime(1) == 2).to_s)
nthPrime(2);// == 3: ' + (nthPrime(2) == 3).to_s)
nthPrime(3);// == 5: ' + (nthPrime(3) == 5).to_s)
nthPrime(4);// == 7: ' + (nthPrime(4) == 7).to_s)
nthPrime(5);// == 11: ' + (nthPrime(5) == 11).to_s)


/* 16. Write a method that takes in an integer (greater than one) and returns true if it is prime;
otherwise return false.
You may want to use the `%` modulo operation.
`5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`.
In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
More generally, if `m` and `n` are integers, `m % n == 0` if and only if `n` divides `m` evenly.
You would not be expected to already know about modulo for the challenge.*/

function isPrime(number) {
  if (number < 1) {
    return false;
  }
  else if (number === 1) {
    return true;
  }
  for (i = 2; i < number; i++){
    if(number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(2); // == true: ' + (isPrime?(2) == true).to_s)
isPrime(3); // == true: ' + (isPrime?(3) == true).to_s)
isPrime(4); // == false: ' + (isPrime?(4) == false).to_s)
isPrime(9); // == false: ' + (isPrime?(9) == false).to_s)

/* 15. Write a method that takes in a string and an array of indices in the string.
Produce a new string, which contains letters from the input string in the order specified by the indices of the array of indices.*/

function scrambleString(string, array) {
  var stringSplit = string.split("");
  newString = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < stringSplit.length; j++) {
      if (j === array[i]) {
        newString += stringSplit[j];
      }
    }
  }
  return newString;
}

scrambleString("abcd", [3, 1, 2, 0]); // == "dbca"
scrambleString("markov", [5, 3, 1, 4, 2, 0]); // == "vkaorm"


/* 14. Write a method that takes in a string of lowercase letters and spaces,
producing a new string that capitalizes the first letter of each word.
You'll want to use the `split` and `join` methods.
Also, the String method `upcase`, which converts a string to all upper case will be helpful.*/

function capitalizeFirstLetter(string) {
  var splitString = string.toLowerCase().split("");
  if(splitString[0] !== " ") {
    splitString[0] = splitString[0].toUpperCase();
  }
  for (var i = 1; i < splitString.length; i++) {
    if(splitString[i - 1] === " ") {
      splitString[i] = splitString[i].toUpperCase();
    }
  }
  return splitString.join("");
}

capitalizeFirstLetter("this is a sentence");
capitalizeFirstLetter("mike bloomfield");

/* 13. Write a method that takes in a number and returns a string, placing a single dash before and after each odd digit.
There is one exception: don't start or end the string with a dash.
You may wish to use the `%` modulo operation; you can see if a number is even if it has zero remainder when divided by two*/

function dashString(number) {
  var splitNumber = number.toString().split("");
  var newString = splitNumber[0];

  for (var i = 1; i < splitNumber.length; i++) {
    if (splitNumber[i] % 2 !== 0 && splitNumber[i - 1] % 2 !== 0) {
      newString += "-" + splitNumber[i];
    }
    else if (splitNumber[i] % 2 === 0 && splitNumber[i - 1] % 2 !== 0) {
      newString += "-" + splitNumber[i];
    }
    else if (splitNumber[i] % 2 === 0 && splitNumber[i - 1] % 2 === 0) {
      newString += splitNumber[i];
    }
    else if (splitNumber[i] % 2 !== 0 && splitNumber[i - 1] % 2 === 0) {
      newString += "-" + splitNumber[i];
    }
  }
  return newString;
}

dashString(203);
dashString(303);
dashString(333);
dashString(3223);

// 12. Write a method that takes in a string. Your method should return the most common letter in the array, and
// a count of how many times it appears.

function mostCommonLetter (string) {
  var splitString = string.toLowerCase().split("");
  var lettersObject = {};
  for (i = 0; i < splitString.length; i++) {
    if (lettersObject[splitString[i]] === undefined) {
      lettersObject[splitString[i]] = 1;
    }
    else {
      lettersObject[splitString[i]] += 1;
    }
  }
  console.log(lettersObject);

  var prevalentLetter = ["a", 0];
  for (var key in lettersObject) {
    if(prevalentLetter[1] < lettersObject[key] && key !== " ")
    prevalentLetter = [key, lettersObject[key]];
  }
  return prevalentLetter;
}

mostCommonLetter("abbab");
mostCommonLetter("This is a great place to start");
mostCommonLetter("It is a great place to end as well");
mostCommonLetter("abca");
mostCommonLetter("abbab");

//Longer solution
function mostCommonLetter(string) {
  var stringSplit = string.toLowerCase().split("");
  var lettersObject = {};

  for (var i = 0; i < stringSplit.length; i++) {
    if (lettersObject[stringSplit[i]] === undefined) {
      lettersObject[stringSplit[i]] = 1;
    }
    else {
      lettersObject[stringSplit[i]] += 1;
    }
  }

  var commonestLetter = [];
  for (var property in lettersObject) {
    if(property !== " ") {
      commonestLetter.push([property, lettersObject[property]]);
    }
  }

  var endLetter = [commonestLetter[0][0], commonestLetter[0][1]];
  for (var j = 1; j < commonestLetter.length; j++) {
    if (commonestLetter[j][1] > endLetter[1]) {
      endLetter = [commonestLetter[j][0], commonestLetter[j][1]];
    }
  }
  return endLetter;
}

mostCommonLetter("abbab");
mostCommonLetter("This is a great place to start");
mostCommonLetter("It is a great place to end as well");
mostCommonLetter("abca");
mostCommonLetter("abbab");

// 11. Write a method that takes an array of numbers in. Your method should return the third greatest number in the array.
// You may assume that the array has at least three numbers in it.

//Second day solution
function thirdGreatestNumber(number) {
  var splitNumber = number.toString().split("");
  var first = splitNumber[0];
  var secondArray = [];

  //first iteration to find the largest number
  for (var i = 1; i < splitNumber.length; i++) {
    if(first > splitNumber[i]) {
      secondArray.push(splitNumber[i]);
    }
    else {
      secondArray.push(first);
      first = splitNumber[i];
    }
  }
  console.log(secondArray);

  //second iteration to find the second largest number
  var second = secondArray[0];
  var thirdArray = [];
  for (var j = 1; j < secondArray.length; j++) {
    if (second > secondArray[j]) {
      thirdArray.push(secondArray[j]);
    }
    else {
      thirdArray.push(second);
      second = secondArray[j];
    }
  }
  console.log(thirdArray);

  //third iteration to find the third largest number
  var third = thirdArray[0];
  for (var k = 1; k < thirdArray.length; k++) {
    if (third < thirdArray[k]) {
      third = thirdArray[k];
    }
  }
  return third;
}

thirdGreatestNumber([5, 3, 7]);
thirdGreatestNumber([5, 3, 7, 4]);
thirdGreatestNumber([2, 3, 7, 4]);

//First day solution
function thirdGreatestNumber(number) {
  var splitNumber = number.toString().split("");
  var first = null;
  var second = null;
  var third = null;
  //first iteration to find the largest number
  for (var i = 0; i < splitNumber.length; i++) {
    if(first < splitNumber[i]) {
      first = splitNumber[i];
    }
  }
  console.log(second < first);
  //second iteration to find the second largest number
  for (var j = 0; j < splitNumber.length; j++) {
    if (second < splitNumber[j] && second < first) {
      second = splitNumber[j];
    }
  }
  console.log(second);
  //third iteration to find the third largest number
  for (var k = 0; k < splitNumber.length; k++) {
    if (third < splitNumber[k] && third < second) {
      third = splitNumber[k];
    }
  }
  return third;
}

thirdGreatestNumber([5, 3, 7]);
thirdGreatestNumber([5, 3, 7, 4]);
thirdGreatestNumber([2, 3, 7, 4]);

function thirdGreatestNumber(array) {
  var greatestNumber = array[0];
  var arrayMinusGreatest = [];
  for (var i = 1; i < array.length; i++) {
    if (greatestNumber > array[i]) {
      arrayMinusGreatest.push(array[i]);
    }
    else {
      arrayMinusGreatest.push(greatestNumber);
      greatestNumber = array[i];
    }
  }

  var secondGreatest = arrayMinusGreatest[0];
  var arrayMinusSecondGreatest = [];
  for (var j = 1; j < arrayMinusGreatest.length; j++) {
    if (secondGreatest > arrayMinusGreatest[j]) {
      arrayMinusSecondGreatest.push(arrayMinusGreatest[j]);
    }
    else {
      arrayMinusSecondGreatest.push(secondGreatest);
      secondGreatest = arrayMinusGreatest[j];
    }
  }

  var thirdGreatest = arrayMinusSecondGreatest[0];
  for (var k = 1; k < arrayMinusSecondGreatest.length; k++) {
    if (thirdGreatest < arrayMinusSecondGreatest[k])
    thirdGreatest = arrayMinusSecondGreatest[k];
  }
  return thirdGreatest;
}

thirdGreatestNumber([5, 3, 7]);
thirdGreatestNumber([5, 3, 7, 4]);
thirdGreatestNumber([2, 3, 7, 4]);

// 10. Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
// You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`.
// In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.

function powerOfTwo(number) {
  if (Math.sqrt(number) % 2 === 0 && number !== 0) {
    return true;
  }
  else if (number === 1) {
    return true;
  }
  return false;
}

powerOfTwo(1);
powerOfTwo(16);
powerOfTwo(64);
powerOfTwo(78);
powerOfTwo(0);

// 9. Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `nil`.

function sumOfPairs(array) {
  var positionsArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < i; j++) {
      if (array[i] + array[j] === 0) {
        positionsArray.push([i,j])
      }
    }
  }
  if (positionsArray.length === 0) {
    return null;
  }
  return positionsArray;
}

sumOfPairs([1, 3, 5, -3]);
sumOfPairs([1, 3, 5]);

// 8. Write a method that takes a string in and returns true if the letter "z" appears within three letters **after** an "a".
// You may assume that the string contains only lowercase letters.


//MORE ELEGANT SOLUTION AS OF APRIL 05 2017
function aTozDistance(string){
  var splitString = string.toLowerCase().split('');
  for (var i = 0; i < splitString.length; i++) {
    var result = splitString[i] === 'a' && splitString[i+1] ==='z' || splitString[i+2] === "z" || splitString[i + 3] === "z" ? true : false;
    if (result === true) return true;
  }
  return false;
}


//OLD SOLUTION
function aTozDistance(string) {
  var stringSplit = string.toLowerCase().split("");
  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i] === "a") {
      if (stringSplit[i + 1] === "z" || stringSplit[i + 2] === "z" || stringSplit[i + 3] === "z") {
        return true;
      }
    }
  }
  return false;
}

aTozDistance("A zuper sided dog");
aTozDistance("abcz");
aTozDistance("abz");
aTozDistance("baz");
aTozDistance("a");
aTozDistance("za");

// 7. Write a method that takes a string and returns true if it is a palindrome.
// A palindrome is a string that is the same whether written backward or forward.
// Assume that there are no spaces; only lowercase letters will be given.

//MORE ELEGANT SOLUTION ON APRIL 5 2017
function palindromeString(string) {
  var result = string === string.split('').reverse().join('') ? true : false;
  return result;
}

palindromeString('aba')

//less lines
function palindromeString(string){
  if(string === string.split("").reverse().join("")) {
    return true;
  }
  return false;
}

//more lines, same solution
function palindromeString(string) {
  var splitString = string.toLowerCase().split("");
  var reverseString = [];
  var pushedString = [];
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] !== " ") {
      pushedString.push(splitString[i]);
      reverseString.unshift(splitString[i]);
    }
  }
  if (reverseString.join("") === pushedString.join("")) {
    return true;
  }
  return false;
}

palindromeString("Abba");
palindromeString("This is a string");
palindromeString("a teeta");
palindromeString("abcba");

// 6. Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.

function vowelsCount(string) {
  var stringSplit = string.toLowerCase().split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var counter = 0;
  for (var i = 0; i < stringSplit.length; i++) {
    if (vowels.indexOf(stringSplit[i]) !== -1) {
      counter += 1;
    }
  }
  return counter;
}

vowelsCount("This is great I tell you.")

// 5. Time conversion
// Write a method that will take in a number of minutes,
// and returns a string that formats the number into `hours:minutes`.

//MORE ELEGANT SOLUTION ON 3/31
function timeConversion(minutes) {
  var hours = Math.floor(minutes/60);
  var min = minutes % 60;
  var hoursString = hours.toString().length === 1 ? "0" + hours.toString() : hours.toString();
  var minString = min.toString().length === 1 ? "0" + min.toString() : min.toString();
  return hoursString + ":" + minString;
}

//LESS ELLEGANT SOLUTION
function timeConversion(minutes) {
  if (Math.floor(minutes/60) < 1 && minutes < 10) {
    return("00:0" + minutes);
  }
  else if (Math.floor(minutes/60) < 1 && minutes >= 10) {
    return("00:" + minutes);
  }
  else if (Math.floor(minutes/60) >=1 && minutes/60 < 10) {
    if (minutes % 60 < 10) {
      return("0" + Math.floor(minutes/60) + ":0" + minutes % 60);
    }
    else {
      return("0" + Math.floor(minutes/60) + ":" + minutes%60);
    }
  }
  else if (Math.floor(minutes/60) >=10) {
    if (minutes % 60 < 10) {
      return(Math.floor(minutes/60) + ":0" + minutes % 60);
    }
    else {
      return(Math.floor(minutes/60) + ":" + minutes%60);
    }
  }
}

timeConversion(100);

// 4. SumNums
// Write a method that takes in an integer `num` and returns the sum of all integers
// between zero and num, up to and including `num`.

function sumNums(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

sumNums(4);

/* 3. Longest word
Write a method that takes in a string. Return the longest word in the string.
You may assume that the string contains only letters and spaces.
You may use the String `split` method to aid you in your quest.*/

function longestWord(string) {
  var splitString = string.split(" ");
  var longest = splitString[0];
  for (var i = 1; i < splitString.length; i++) {
    if (longest.length < splitString[i].length) {
      longest = splitString[i];
    }
  }
  return longest;
}

longestWord("This is so loooong yesss it iiiiiiiis");

// 2. Factorial
// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
// As a special case, `factorial(0) == 1`.

function factorial(n) {
  var loopNum = n;
  if (n === 0) {
    return 1;
  }
  for (var i = 1; i < loopNum; i++) {
    n = n*(n - i);
    console.log(n);
  }
  return n;
}

factorial(3);

//1. reverse
// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.
// Don't use String's reverse method; that would be too simple.

//MORE ELEGANT SOLUTION AS OF APRIL 5TH 2017
function reverseString(string) {
  return string.split('').reverse().join('');
}



function reverseString(string) {
  var splitString = string.split("");
  var newString = [];
  for (var i = 0; i < splitString.length; i++) {
    newString.unshift(splitString[i]);
  }
  return newString.join("");
}

reverseString("This is great!");
