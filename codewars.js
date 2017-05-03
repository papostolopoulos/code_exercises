/*1. Your friend won't stop texting his girlfriend. It's all he does. All day. Seriously.
The texts are so mushy too! The whole situation just makes you feel ill. Being the wonderful friend that you are,
you hatch an evil plot.
While he's sleeping, you take his phone and change the autocorrect options so that every time he types "you" or "u"
it gets changed to "your sister."

Write a function called autocorrect that takes a string and replaces all instances of "you" or "u"
(not case sensitive) with "your sister" (always lower case).

Return the resulting string.

Here's the slightly tricky part: These are text messages, so there are different forms of "you" and "u".

For the purposes of this kata, here's what you need to support:
1, "youuuuu" with any number of u characters tacked onto the end
2. "u" at the beginning, middle, or end of a string, but NOT part of a word
3. "you" but NOT as part of another word like youtube or bayou*/

function autocorrect(input) {
  var splitStringLowerCase = input.toLowerCase().split(" ");
  var splitString = input.split(" ");
  var punctuation = ["!", ".", ",", "(", ")", ";", ":"];
  var newString = [];

  for (var i = 0; i < splitStringLowerCase.length; i++) {
    var wordEval = splitStringLowerCase[i];
    if (wordEval === "you" || wordEval === "u") {
      newString.push("your sister");
    }
    else if (wordEval.slice(0,3) === "you" && wordEval.length > 3) {
      var counterYou = 3;
      for (var j = 3; j < wordEval.length; j++) {
        if (wordEval[j] === "u") {
          counterYou += 1;
          if (wordEval.length === counterYou) {
            newString.push("your sister");
            break;
          }
        }
        else if (wordEval.length === counterYou + 1 && punctuation.indexOf(wordEval[wordEval.length - 1]) !== -1) {
          newString.push("your sister" + wordEval[wordEval.length - 1]);
        }
        else {
          newString.push(splitString[i]);
          break;
        }
      }
    }
    else {
      newString.push(splitString[i]);
    }
  }
  return newString.join(" ");
}


autocorrect("I want to film the bayou with you and put it on youtube");
autocorrect("I miss you!");



/*2. Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/

function findOdd(A) {
  var counterObject = {}
  for (var i = 0; i < A.length; i++) {
    if (counterObject[A[i]] === undefined) {
      counterObject[A[i]] = 1;
    }
    else {
      counterObject[A[i]] += 1;
    }
  }
  var endResult;
  for (key in counterObject) {
    if (counterObject[key] % 2 !== 0) {
      endResult = key;
    }
  }
  return Number(endResult);
}

findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]);
findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]);
findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ])



/*3 Make them bark
You have been hired by a dogbreeder to write a program to keep record of his dogs.
You've already made a constructor Dog, so no one has to hardcode every puppy.

The work seems to be done. It's high time to collect the payment.
..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark().
Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

You can't even count how much objects that bastard client of yours already made.
He has a lot of dogs, and none of them can .bark().
Can you solve this problem, or will you let this client outsmart you for good?

Practical info:
The .bark() method of a dog should return the string 'Woof!'.
The contructor you made (it is preloaded) looks like this:
function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages.
He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you...*/

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
    this.bark = function() {
      return("Woof!");
    }
}

//solution from codewars
Dog.prototype.bark = function() { return 'Woof!' }



/*4 Order People by age Using Arrow Function

Sort and Order people by their age using Arrow Functions
Task
Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
Input
Input will be a valid array with People objects containing an Age and Name
Output
Output will be a valid sorted array with People objects sorted by Age in ascending order
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions*/

var OrderPeople = function(people){
  return people.sort( => ); //complete this function
}


/*5 Write a function, persistence, that takes in a positive parameter num and returns its
multiplicative persistence, which is the number of times you must multiply the digits
in num until you reach a single digit.

For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number
 https://www.codewars.com/kata/persistent-bugger/train/javascript
*/

function persistence(num, rotations) {
  let stringedNum = num.toString();
  let persistenceNewNum = 1;

  if (rotations === undefined) rotations = 0;

  if (stringedNum.length === 1) return rotations;

  for (var i = 0; i < stringedNum.length; i++) {
    persistenceNewNum *= Number(stringedNum[i])
  }
  rotations += 1;
  if (persistenceNewNum.toString().length === 1) return rotations;

  return persistence(persistenceNewNum, rotations);
}

/*6 Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing
the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it,
regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1,1,1] as a starting input
(AKA signature), we have this sequence:

[1,1,1,3,5,9,17,31,...]
But what if we started with [0,0,1] as a signature? As starting with [0,1] instead
of [1,1] basically shifts the common Fibonacci sequence by once place, you may be
tempted to think that we would get the same sequence shifted by 2 places,
but that is not the case and we would get:

[0,0,1,1,2,4,7,13,24,...]
Well, you may have guessed it by now, but to be clear: you need to create a
fibonacci function that given a signature array/list, returns the first n
elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number;
if n==0, then return an empty array and be ready for anything else which is not
clearly specified ;)
https://www.codewars.com/kata/tribonacci-sequence/train/javascript
*/

function tribonacci(segment, number){
  if (number === 0) return [];
  if (number === 1) return [segment[0]];
  if (number === 2) return [segment[0], segment[1]];
 if(number <=3) return segment;

 var segmentLength = segment.length
 var newNum = segment[segmentLength - 1] + segment[segmentLength - 2] + segment[segmentLength - 3],
 newSegment = segment;

 newSegment.push(newNum)

 var counter = number;
 counter--;

 return tribonacci(newSegment, counter)
}


/*7 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
https://www.codewars.com/kata/multiples-of-3-and-5/train/javascript*/
function solution(input){
  if (input <= 1) {
    return 0;
  }
  var finalArr = [],

  for(let i = 1; i < input; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push(i);
      continue;
    }
    if (i % 3 === 0) {
      finalArr.push(i);
    }
    if (i % 5 === 0) {
      finalArr.push(i);
    }
  }

  var finalNum = 0;
  for (let j = 0; j < finalArr.length; j++) {
    finalNum += finalArr[j];
  }

  return finalNum;
}

/*8. 20170425
The rgb() method is incomplete.
Complete the method so that passing in RGB decimal values will result in a hexadecimal
representation being returned. The valid decimal values for RGB are 0 - 255.
Any (r,g,b) argument values that fall out of that range
should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


*/


//SOLUTION WITH THE DEFINITION OF AN OBJECT
function rgb(r, g, b) {
  r > 255 ? r = 255 : r < 0 ? r = 0 : ""
  g > 255 ? g = 255 : g < 0 ? g = 0 : ""
  b > 255 ? b = 255 : b < 0 ? b = 0 : ""
  var endArr = [];
  var hexLettersObj = {
    "10": "A",
    "11": "B",
    "12": "C",
    "13": "D",
    "14": "E",
    "15": "F"
  };
  var hexLetterKeysArr = Object.keys(hexLettersObj);
  endArr.push((Math.floor(r/16)).toString(), (r%16).toString(), (Math.floor(g/16)).toString(), (g%16).toString(), (Math.floor(b/16)).toString(), (b%16).toString());

  for (var i = 0; i < endArr.length; i++) {
    if (hexLetterKeysArr.indexOf(endArr[i]) !== -1) {
      endArr[i] = hexLettersObj[endArr[i]];
    }
  }
  return endArr.join('');
}


//SOLUTION WITH TOSTRING(16) WHERE 16 IS THE BASE USED TO REPRESENT NUMERIC VALUES
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
function rgb(r, g, b) {
  r > 255 ? r = 255 : r < 0 ? r = 0 : ""
  g > 255 ? g = 255 : g < 0 ? g = 0 : ""
  b > 255 ? b = 255 : b < 0 ? b = 0 : ""
  var red, green, blue;
  r === 0 ? red = "00" : red = (r).toString(16);
  g === 0 ? green = "00" : green = (g).toString(16);
  b === 0 ? blue = "00" : blue = (b).toString(16);
  return (red + green + blue).toUpperCase();
}

/*9. 20170427
Complete the method/function so that it converts dash/underscore delimited words
into camel casing.
The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

*/

function toCamelCase (str) {
  var strArr = str.split("")
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] === "-" || strArr[i] === "_" ? strArr.splice(i,2, strArr[i+1].toUpperCase()) : "";
  }
  return strArr.join('');
}

//solution with regular expression
function toCamelCase (str) {
  return str.replace(/[-_]\w/g, (match) => {
    return match[1].toUpperCase()
  });
}



/*10. 20170428
In English and programming, groups can be made using symbols such as "()" and "{}"
that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

Your job in this kata will be to make a program that checks a string for correct
grouping. For instance, the following groups are done correctly:

({})
[[]()]
[{()}]

The next are done incorrectly

{(})
([]
[])
A correct string cannot close groups in the wrong order,
open a group but fail to close it, or close a group before it is opened.

Your function will take an input string that may contain any of the symbols "()" "{}" or "[]"
to create groups.

It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.
*/

function groupCheck(s) {
    if (s.length === 0) {
      return true;
    }
    else if (s.length % 2 !== 0) {
      return false;
    }

    let i = 0;
    while(i < s.length) {
      if (s[0] === "]" || s[0] === "}" || s[0] === ")") {
        return false;
      }

      if (s[0] === "{" && s[1] === "}" || s[0] === "[" && s[1] === "]" || s[0] === "(" && s[1] === ")") {
        s = s.slice(2);
      }
      else if (s[0] === "{" && s[s.length-1] === "}" || s[0] === "[" && s[s.length-1] === "]" || s[0] === "(" && s[s.length-1] === ")") {
        s = s.slice(1,s.length-1);
      }
      else {
        return false;
      }
    }
    return true;
}





//Recursive method. Not working. Need to understand the Execution Context
function groupCheck(s){
  console.log(typeof s, s, s.length);
  if (s.length === 0) {
    console.log("in s.length === 0");
    return true;
  }
  else if (s.length % 2 !== 0) {
    console.log("in s.length % 2 !== 0");
    return false;
  }
  else if (s[0] === "]" || s[0] === "}" || s[0] === ")") {
    console.log("in s[0] === }])");
    return false;
  }
  else if (s[0] === "{" && s[1] === "}" || s[0] === "[" && s[1] === "]" || s[0] === "(" && s[1] === ")") {
    console.log("if 1 {}", s);
    s = s.slice(2);
    groupCheck(s);
  }
  else if (s[0] === "{" && s[s.length-1] === "}" || s[0] === "[" && s[s.length-1] === "]" || s[0] === "(" && s[s.length-1] === ")") {
    console.log("if 4 {}", s);
    s = s.slice(1,s.length-1);
    groupCheck(s);
  }
  return false;
}

/*11. 20170428
Create a function taking a positive integer as its parameter and returning a string
containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting
with the left most digit and skipping any digit with a value of zero.
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in
descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
IV         4
V          5
IX         9
X          10
XL         40
L          50
XC         90
C          100
CD         400
D          500
CM         900
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals*/

//Solution on 5/3 with array of objects and .map()
function solution(number) {
  var endResult = ""
  var romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  arabicNumbers.map(function (curr, idx, arr) {
    while (number >= curr) {
      endResult += romanNumbers[idx];
      number -= curr;
    }
  });

  return endResult;
}


//solution on 5/3 with array of objects and .reduce()
function solution(number) {
  var basicRomans = [
    {romanNumber: "M", arabicNumber: 1000},
    {romanNumber: "CM", arabicNumber: 900},
    {romanNumber: "D", arabicNumber: 500},
    {romanNumber: "CD", arabicNumber: 400},
    {romanNumber: "C", arabicNumber: 100},
    {romanNumber: "XC", arabicNumber: 90},
    {romanNumber: "L", arabicNumber: 50},
    {romanNumber: "XL", arabicNumber: 40},
    {romanNumber: "X", arabicNumber: 10},
    {romanNumber: "IX", arabicNumber: 9},
    {romanNumber: "V", arabicNumber: 5},
    {romanNumber: "IV", arabicNumber: 4},
    {romanNumber: "I", arabicNumber: 1}
  ]

  var endResult = basicRomans.reduce(function (acc, elem, idx, arr) {
    while (number >= elem.arabicNumber) {
      console.log("inside");
      acc += elem.romanNumber
      number -= elem.arabicNumber
    }

    return acc;
  }, "")

  return endResult;
}


//solution on 5/2 with objects and for in loop
function solution(number) {
  var finalRoman = "";
  var basicRomans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  while (number > 0) {
    for (var key in basicRomans) {
      if (basicRomans[key] <= number) {
        finalRoman += key;
        number -= basicRomans[key]
        break;
      }
    }
  }
  return finalRoman;
}



//Initial solution on 4/28
function solution(number){
  var result;
  var endResult = "";
  var symbols = {

  }
  if (number >= 1000) {
    result = number / 1000;
    for (var i = 0; i < Math.floor(result); i++) {
      endResult += "M"
    }
    number = number % 1000;
  }

  if (number + 100 >= 1000) {
    endResult += "CM"
    number = number % 100;
  }

  if (number >= 500) {
    endResult += "D"
    number = number % 500;
  }

  if (number + 100 >= 500) {
    endResult += "CD";
    number = number % 100;
  }

  if (number >= 100) {
    result = number / 100;
    for (var i = 0; i < Math.floor(result); i++) {
      endResult += "C"
    }
    number = number % 100;
  }

  if (number + 10 >= 100) {
    endResult += "XC";
    number = number % 10;
  }

  if (number >= 50) {
    endResult += "L"
    number = number % 50;
  }

  if (number + 10 >= 50) {
    endResult += "XL";
    number = number % 10;
  }

  if (number >= 10) {
    result = number / 10;
    for (var i = 0; i < Math.floor(result); i++) {
      endResult += "X"
    }
    number = number % 10;
  }

  if (number + 1 >= 10) {
    endResult += "IX";
    number = 0;
  }

  if (number >= 5) {
    endResult += "V"
    number = number % 5;
  }

  if (number + 1 >= 5) {
    endResult += "IV";
    number = 0;
  }

  if (number >= 1) {
    result = number;
    for (var i = 0; i < Math.floor(result); i++) {
      endResult += "I"
    }
    number = 0;
  }


  return endResult;
}

/*12. 20170503
FIND THE MISSING TERM IN AN ARITHMETIC PROGRESSION
An Arithmetic Progression is defined as one in which there is a constant difference
between the consecutive terms of a given series of numbers.
You are provided with consecutive elements of an Arithmetic Progression.
There is however one hitch: Exactly one term from the original series is missing
from the set of numbers which have been given to you.
The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing (list) ,
list will always be atleast 3 numbers.
The missing term will never be the first or last one.

Example :
13 21 29 37
findMissing([1,3,5,9,11]) == 7
findMissing([ 0, -1, -3 ]) == -2
findMissing([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]) == 2
findMissing([ 0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12 ]) == 6
findMissing([ 0,-1,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31 ]) == -2
PS: This is a sample question of the facebook engeneer challange on interviewstreet.
I found it quite fun to solve on paper using math , derive the algo that way. Have fun!
*/

//Most popular solution from codewars
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) {
    return val !== (list[0] + index * step); })[0] - step;
}

//This guy's solution seems easier to understand
var findMissing = function (list) {
  var delta1 = list[0] - list[1];
  var delta2 = list[1] - list[2];
  var delta  = Math.min(Math.abs(delta1), Math.abs(delta2));
  var direction = list[0] < list[1] ? 1 : -1;

  var start = list[0];

  for (var i = 0; i < list.length; i++, start += delta * direction) {
    if (list[i] !== start) return start;
  }
}



//My solution as May 3rd
function findMissing (list) {
  var difference = list.map(function (curr, idx, arr) {
    return arr[idx + 1] - curr;
  })

  for (var i = 0; i < difference.length; i++) {
    if (Math.abs(difference[i]) < Math.abs(difference[i+1])) {
      return (list[i+1] + difference[i])
    }
    else if (Math.abs(difference[i]) > Math.abs(difference[i+1])) {
      return (list[i] + difference[i+1])
    }
  }
}
