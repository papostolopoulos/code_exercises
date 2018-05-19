/*20170731
FIZZ BUZZ https://js.checkio.org/mission/fizz-buzz/
"Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.

You should write a function that will receive a positive integer and return:
"Fizz Buzz" if the number is divisible by 3 and by 5;
"Fizz" if the number is divisible by 3;
"Buzz" if the number is divisible by 5;
The number as a string for other cases.
Input: A number as an integer.

Output: The answer as a string.

Example:

fizzBuzz(15) == "Fizz Buzz"
fizzBuzz(6) == "Fizz"
fizzBuzz(5) == "Buzz"
fizzBuzz(7) == "7"
*/

function fizzBuzz(num) {
  let result = num % 3 === 0 && num % 5 === 0 ? "Fizz Buzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : num.toString();
  return result;
}



/*20170731
EVEN THE LAST https://js.checkio.org/mission/even-last/
You are given an array of integers. You should find the sum of the elements with even indexes
(0th, 2nd, 4th...) then multiply this summed number and the final element of the array together.
Don't forget that the first element has an index of 0.

For an empty array, the result will always be 0 (zero).

Input: A list of integers.

Output: The number as an integer.

Example:

evenLast([0, 1, 2, 3, 4, 5]) == 30
evenLast([1, 3, 5]) == 30
evenLast([6]) == 36
evenLast([]) == 0 */

function evenLast(array) {
  if (array.length === 0) return 0;

  let sumOfEvenIndexes = 0;
  for (var i = 0; i < array.length; i++) {
    i % 2 === 0 ? sumOfEvenIndexes += array[i] : null;
  }
  return sumOfEvenIndexes * array[array.length - 1];
}

//solution from the internet
function evenLast(data) {
    return data.filter((item, i) => i % 2 == 0).reduce((prev, cur) => prev + cur, 0) * data[data.length - 1] || 0;
}



/*20170731
SECRET MESSAGE https://js.checkio.org/mission/secret-message/
"Where does a wise man hide a leaf? In the forest.
But what does he do if there is no forest? ... He grows a forest to hide it in."
-- Gilbert Keith Chesterton

Ever tried to send a secret message to someone without using the postal service?
You could use newspapers to tell your secret. Even if someone finds your message,
it's easy to brush them off and that its paranoia and a bogus conspiracy theory.
One of the simplest ways to hide a secret message is to use capital letters.
Let's find some of these secret messages.

You are given a chunk of text. Gather all capital letters in one word in the order
that they appear in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.",
if we collect all of the capital letters, we get the message "HELLO".

Input: A text as a string (unicode).

Output: The secret message as a string or an empty string.

Example:

findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
findMessage("hello world!") == ""
*/

function findMessage(string) {
  let secretMessage = "";
  let alphabetCapitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let value of string) {
    alphabetCapitals.indexOf(value) !== -1 ? secretMessage += value : null;
  }
  return secretMessage;
}

//solution from the internet
function findMessage(data) {
    return data.replace(/[^A-Z]/g, '');
}



/*20170801
THREE WORDS https://js.checkio.org/mission/three-words/

Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space).
The words contains only letters. You should check if the string contains
three words in succession.
For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.

Output: The answer as a boolean.

Example:

threeWords("Hello World hello") == True
threeWords("He is 123 man") == False
threeWords("1 2 3 4") == False
threeWords("bla bla bla bla") == True
threeWords("Hi") == False
*/

function threeWords(string) {
  let splitString = string.toLowerCase().split(' ');
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let counter = 0;

  for (let value of splitString) {
    alphabet.indexOf(value.slice(0,1)) !== -1 ? counter += 1 : counter = 0;
    if (counter >= 3) return true;
  }
  return false;
}

//online solution
function threeWords(data) {
    return /\D+\s\D+\s\D+/.test(data);
}



/* 20170801
INDEX POWER https://js.checkio.org/mission/index-power/
You are given an array with positive numbers and a number N.
You should find the N-th power of the element in the array with the index N.
If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:
- array = [1, 2, 3, 4] and N = 2, then the result is 32 == 9;
- array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

Input: Two arguments. An array as a list of integers and a number as a integer.

Output: The result as an integer.

Example:

indexPower([1, 2, 3, 4], 2) == 9
indexPower([1, 3, 10, 100], 3) == 1000000
indexPower([0, 1], 0) == 1
indexPower([1, 2], 3) == -1

*/

function indexPower(arr, num) {
  if (num > arr.length - 1) return -1;
  return Math.pow(arr[num], num);
}

function indexPower(arr, num) {
  return num > arr.length - 1 ? -1 : Math.pow(arr[num], num);
}

//from the internet
function indexPower(array, n){
    return Math.pow(array[n],n) || -1;
}



/*20170802
THE MOST NUMBERS https://js.checkio.org/mission/most-numbers/
Let's work with numbers.

You are given an array of numbers (floats).
You should find the difference between the maximum and minimum element.
Your function should be able to handle an undefined amount of arguments.
For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.
So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.

Input: An arbitrary number of arguments as numbers (int, float).

Output: The difference between maximum and minimum as a number (int, float).

Example:

mostNumbers(1, 2, 3) == 2
mostNumbers(5, -5) == 10
mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
mostNumbers() == 0
*/

function mostNumbers(args) {
  let max = -Infinity;
  let min = +Infinity;
  if (arguments.length === 0) return 0;
  for (var i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) min = arguments[i];
    if (max < arguments[i]) max = arguments[i];
  }
  return max - min;
}

function mostNumbers(args) {
  return arguments.length === 0 ? 0 : Math.max(...arguments) - Math.min(...arguments);
}



/*20170803
DIGITS MULTIPLICATION https://js.checkio.org/mission/digits-multiplication/
You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive integer.

Output: The product of the digits as an integer.

digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1

*/
function digitsMultip(num) {
  let numToArr = num.toString().split('');
  console.log(numToArr);
  return numToArr
  .filter((ele) => {
    return Number(ele) !== 0
  })
  .reduce((product, value) => {
    return product * Number(value);
  }, 1);
}

function digitsMultip(num) {
  let numToArr = num.toString().split('');
  let result = 1;

  for (let value of numToArr) {
    if (Number(value) !== 0) result *= value;
  }
  return result;
}



/*20170803
COUNT INVERSION https://js.checkio.org/mission/count-inversions/
In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a sequence.

Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
- 5 and 3; - 5 and 4; - 7 and 6.

You are given a sequence of unique numbers and you should count the number of inversions in this sequence.

Input: A sequence as a tuple of integers.

Output: The inversion number as an integer.

Example:

countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
countInversion([0, 1, 2, 3]) == 0
*/

function countInversion(array) {
  let counter = 0;
  while (array.length > 1) {
    let compare = array.shift();
    for (let value of array) {
      if (value < compare) counter += 1;
    }
  }
  return counter;
}



/*20170803
COMMON WORDS https://js.checkio.org/mission/common-words/
Let's continue examining words. You are given two string with words separated by commas.
Try to find what is common between these strings.
The words are not repeated in the same string.

Your function should find all of the words that appear in both strings.
The result must be represented as a string of words separated by commas in alphabetic order.

Input: Two arguments as strings.

Output: The common words as a string.

Example:

commonWords("hello,world", "hello,earth") == "hello"
commonWords("one,two,three", "four,five,six") == ""
commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
*/

function commonWords(str1, str2) {
  let str1Arr = str1.split(',');
  let str2Arr = str2.split(',');
  let result = [];
  for (let value of str1Arr){
    if (str2Arr.indexOf(value) !== -1) result.push(value);
  }
  return result.sort().join(',');
}

function commonWords(str1, str2) {
  let str1Arr = str1.split(',');
  let str2Arr = str2.split(',');
  let result = [];
  for (let value of str1Arr){
    if (str2Arr.includes(value)) result.push(value);
  }
  return result.sort().join(',');
}


//solution from the internet
function commonWords(first, second) {
    return first.split(","). filter(x => second.split(",").includes(x)).sort().join(",");
}



/*20170807
ABSOLUTE SORTING https://js.checkio.org/mission/absolute-sorting/
Let's try some sorting. Here is an array with the specific rules.

The array has various numbers.
You should sort it, but sort it by absolute value in ascending order.
For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).
Your function should return the sorted list .

Precondition: The numbers in the array are unique by their absolute values.

Input: An array of numbers .

Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.

Addition: The result of your function will be shown as a list in the tests explanation panel.

Example:


Note from Paris: These examples are typed like the arrays are for Java and not Javascript.
Instead of absoluteSorting((-20, -5, 10, 15)) it should be absoluteSorting([-20, -5, 10, 15])
absoluteSorting((-20, -5, 10, 15)) == [-5, 10, 15, -20] # or (-5, 10, 15, -20)
absoluteSorting((1, 2, 3, 0)) == [0, 1, 2, 3]
absoluteSorting((-1, -2, -3, 0)) == [0, -1, -2, -3]
*/

function absoluteSorting(array) {
  return array.sort((a, b) =>  Math.abs(a) - Math.abs(b));
}



/*20170807
NUMBER BASE https://js.checkio.org/mission/number-radix/
Do you remember the radix and Numeral systems from math class? Let's practice with it.

You are given a positive number as a string along with the radix for it.
Your function should convert it into decimal form.
The radix is less than 37 and greater than 1.
The task uses digits and the letters A-Z for the strings.

Watch out for cases when the number cannot be converted.
For example: "1A" cannot be converted with radix 9.
For these cases your function should return -1.

Input: Two arguments. A number as string and a radix as an integer.

Output: The converted number as an integer.

Example:

numberRadix("AF", 16) == 175
numberRadix("101", 2) == 5
numberRadix("101", 5) == 26
numberRadix("Z", 36) == 35
numberRadix("AB", 10) == -1

Precondition:
re.match("\A[A-Z0-9]\Z", str_number)
0 < len(str_number) ≤ 10
2 ≤ radix ≤ 36
*/

//Incomplete solution
function numberRadix(str, num) {
  return isNaN(parseInt(str, num)) ? -1 : parseInt(str, num);
}


/*
The following solution is working after I added the if statement based on the following
paragraph from MDN (for parseInt()):
If parseInt encounters a character that is not a numeral in the specified radix,
it ignores it and all succeeding characters and returns the integer value
parsed up to that point.
parseInt truncates numbers to integer values. Leading and trailing spaces are allowed.
*/
function numberRadix(str, num) {
  for (var i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], num))) return -1;
  }
  return isNaN(parseInt(str, num)) ? -1 : parseInt(str, num);
}

//online solution - In the return line, the guy returns the ps_int result IF
// ps_int === true (if NaN it will return false) and
// if the first parameter (str_number) equals the result of ps_int inverter to
// a string ps_int.toString(radix)

function numberRadix(str_number, radix){
    const ps_int = parseInt(str_number, radix);
    const ts_int = ps_int.toString(radix);
​
    return ps_int && str_number.toLowerCase() === ts_int ? ps_int : -1;
}



/*20180517
SAY HI https://js.checkio.org/en/mission/say-hi/
In this mission you should write a function that introduce a person with a
given parameters in attributes.

Input: Two arguments. String and positive integer.
Output: String.

Example:
sayHi("Alex", 32); // == "Hi. My name is Alex and I'm 32 years old"
sayHi("Frank", 68); // == "Hi. My name is Frank and I'm 68 years old"*/

function sayHi(name, age){
    return `Hi. My name is ${name} and I'm ${age} years old`;
    }

sayHi("Alex", 32); // == "Hi. My name is Alex and I'm 32 years old"
sayHi("Frank", 68); // == "Hi. My name is Frank and I'm 68 years old"



/*20180517
CORRECT SENTENCE https://js.checkio.org/en/mission/correct-sentence/
For the input of your function will be given one sentence. You have to return
its fixed copy in a way so it’s always starts with a capital letter
and ends with a dot.

Pay attention to the fact that not all of the fixes is necessary.
If a sentence already ends with a dot then adding another one
will be a mistake.
Input: A string.
Output: A string.

Example:
correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
*/

function correctSentence(str) {
  return str[str.length - 1] === "." ?
  str.substring(0, 1).toUpperCase() + str.substring(1) :
  str.substring(0, 1).toUpperCase() + str.substring(1) + ".";
}

correctSentence("greetings, friends"); // == "Greetings, friends."
correctSentence("Greetings, friends"); // == "Greetings, friends."
correctSentence("Greetings, friends."); // == "Greetings, friends."


// from the Internet
function correctSentence(text) {
    return text[0].toUpperCase() + (text.replace(/\.?$/, '.')).substr(1)  ;
}



/*20180517
FIRST WORD https://js.checkio.org/en/mission/first-word/
You are given a string where you have to find its first word.

When solving a task pay attention to the following points:
There can be dots and commas in a string.
A string can start with a letter or, for example, a dot or space.
A word can contain an apostrophe and it's a part of a word.
The whole text can be represented with one word and that's it.
Input: A string.

Output: A string.

Example:

firstWord("Hello world") == "Hello"
firstWord("greetings, friends") == "greetings"
*/

function firstWord(str) {
  return str.replace(/[.,]+/, ' ').trim().split(" ")[0];
}

//Second solution after looking at other people's solutions (but .match was my idea)
function firstWord(str){
  return str.match(/\w+'?\w*/)[0];
}

const firstWord = str => str.match(/\w+'?\w*/)[0];


//from the Internet
function firstWord(a, b) {
    return a.replace(/.*?([a-z']+).*/i, '$1');
}

function firstWord(a,b) {
    //using regular expressions, single out the first word and store it as 'word'
    let word = /\w+'?[\w+]?/.exec(a);
    //log 'word' to console as a string
    console.log(word.toString());
    //return 'word' as a string
    return word.toString();
}


firstWord("Hello world"); // == "Hello"
firstWord("greetings, friends"); // == "greetings"



/* 20180517
SECOND INDEX https://js.checkio.org/en/mission/second-index/
You are given two strings and you have to find an index of the second
occurrence of the second string in the first one.
Let's go through the first example where you need to find the second occurrence
of "s" in a word "sims". It’s easy to find its first occurrence with a
function indexOf which will point out that "s" is the first symbol in a word
"sims" and therefore the index of the first occurrence is 0.
But we have to find the second "s" which is 4th in a row and that means
that the index of the second occurrence (and the answer to a question) is 3.

Input: Two strings.
Output: Int or undefined

Example:
secondIndex("sims", "s") == 3
secondIndex("find the river", "e") == 12
secondIndex("hi", " ")  == undefined
*/

function secondIndex(str, ltr) {
  return str.indexOf(ltr, str.indexOf(ltr) + 1) !== -1 ? str.indexOf(ltr, str.indexOf(ltr) + 1) : null;
}

//Alternative - SEE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
function secondIndex(str, ltr) {
  var reg = str.match(RegExp(ltr, "g"));
  return reg !== null && reg.length > 1 ? str.indexOf(ltr, str.indexOf(ltr) + 1) : undefined;
}

const secondIndex = (str, ltr) => str.indexOf(ltr, str.indexOf(ltr) + 1);

secondIndex("sims", "s"); // == 3
secondIndex("find the river", "e"); // == 12
secondIndex("hi", " "); // == undefined



/*20180517
BETWEEN MARKERS https://js.checkio.org/en/mission/between-markers/
You are given a string and two markers (the initial and final).
You have to find a substring enclosed between these two markers.
But there are a few important conditions:

The initial and final markers are always different.
- If there is no initial marker then the beginning should
be considered as the beginning of a string.

- If there is no final marker then the ending should be
considered as the ending of a string.

- If the initial and final markers are missing
then simply return the whole string.

- If the final marker is standing in front of the
initial one then return an empty string.

Input: Three arguments. All of them are strings.
The second and third arguments are the initial and final markers.
Output: A string.

Example:
betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'
*/

function betweenMarkers(str, init, final) {
  if (str.indexOf(init) > str.indexOf(final)) return "";
  if (str.indexOf(init) === -1 && str.indexOf(final) === -1) return str;
  if (str.indexOf(final) === -1) return str.slice(str.indexOf(init) + init.length);
  if (str.indexOf(init) === -1) return str.slice(0, str.indexOf(final));

  return str.slice(str.indexOf(init) + init.length, str.indexOf(final));
}

betweenMarkers('What is >apple<', '>', '<'); // == 'apple'
betweenMarkers('No[/b] hi', '[b]', '[/b]'); // == 'No'
betweenMarkers("<head><title>My new site</title></head>","<title>","</title>"); // == "My new site"
betweenMarkers("No [b]hi","[b]","[/b]"); // == "Hi"



/*20180518

*/
