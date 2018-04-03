//------------------------------------//
//      Week 4 Day 1 - Coderbyte      //
//------------------------------------//

/*Using the JavaScript language,
have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. */

function longestWord(sen) {
  splitSentence = sen.split(" ");
  var longWord = "";
  for (var i = 0; i < splitSentence.length; i++) {
    if (longWord.length < splitSentence[i].length) {
        longWord = splitSentence[i];
    }
  }
  return longWord;
}

longestWord("This is a really reaaaaaly long word text heeeeere");

/*Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space. */

function letterCapitalize(str) {
  var newStr = str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i-1] === " ") {
      newStr += str[i].toUpperCase()
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}

letterCapitalize("This is a string");

/*Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000. */

function simpleAdding(num) {
  var returnedValue = 0;
  for (var i = 1; i <= num; i++) {
    returnedValue += i;
  }
  return returnedValue;
}

simpleAdding(10);


/*Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */

function letterChanges(str) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var vowels = ["a", "e", "i", "o", "u"];
  var splitArray = str.toLowerCase().split("");
  var newArray = [];
  for (var i = 0; i < splitArray.length; i++) {
    for (var k = 0; k < alphabet.length; k++) {
      if (splitArray[i] === alphabet[k] && alphabet[k] === alphabet[alphabet.length - 1]) {
        newArray.push(alphabet[0]);
        break;
      }
      else if (splitArray[i] === alphabet[k]) {
        newArray.push(alphabet[k+1]);
        break;
      }
      else if (splitArray[i] === " ") {
        newArray.push(splitArray[i]);
        break;
      }
    }
  }
  for (var j = 0; j < newArray.length; j++) {
    if (vowels.indexOf(newArray[j]) !== -1) {
      newArray[j] = newArray[j].toUpperCase();
    }
  }

  return(newArray.join(""));
}

letterChanges("Change the letters");

/*Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and
return the string in reversed order.

Use the Parameter Testing feature in the box below to test your code with different arguments.*/

function firstReverse(str) {
  var reversedString = str.split("").reverse().join("");
  return reversedString;
}

firstReverse("This is great");

/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed
and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)).
For the test cases, the range will be between 1 and 18. */

function firstFactorial(num) {
  for (var i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
}

//------------------------------------//
//    Week 4 Day 1 - Project Euler    //
//------------------------------------//

/*Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. Answer: 233168*/

function multiplesOf3And5(number) {
  var sumOfMultiples = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumOfMultiples += i;
    }
  }
  return sumOfMultiples;
}

/*Largest palindrome product
Problem 2
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. Answer: 906609*/

function palindromicNumber() {
  var finalNumber = 0;
  for (var i = 999; i >= 100; i--) {
    for (var j = 999; j >= 100; j--) {
      var palindrome = (i*j).toString();
      var reversedPalindrome = palindrome.split("").reverse().join("");
      if (reversedPalindrome === palindrome && parseInt(palindrome) > finalNumber) {
        finalNumber = parseInt(palindrome);
      }
    }
  }
  return finalNumber;
}

palindromicNumber();

//Not so good solution
function palindromicNumber() {
  var finalNumber = 0;
  for (var i = 999; i >= 100; i--) {
    for (var j = 999; j >= 100; j--) {
      var palind = (i * j);
      var palindrome = palind.toString().split("");
      if (palindrome.length === 6) {
        if (palindrome[0] === palindrome[palindrome.length-1] && palindrome[1] === palindrome[palindrome.length-2] && palindrome[2] === palindrome[palindrome.length-3]) {
            var joinedPalindrome = parseInt(palindrome.join(""))
          if (finalNumber < joinedPalindrome) {
            finalNumber = joinedPalindrome;
          }
        }
      }
    }
  }
  return finalNumber;
}


/*Smallest multiple
Problem 3
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? Answer: 232792560 */

//From the app academy solutions
function pe5(){
  var number = 2520;

  while(true){
    var isDivisible = true;

    for (var i = 3; i <= 20; i++) {
      if(number % i !== 0){
        isDivisible = false;
        break;
      }
    }

    if(isDivisible){
      return number;
    }

    number += 2;
  }
}

//solution modified by me
function smallestMultiple(){
  for (var i = 20; ; i++) {
    var isDivisible = true;
    for (var k = 1; k <= 20; k++) {
      if (i % k !== 0) {
        isDivisible = false;
        break;
      }
    }

    if (isDivisible) {
      return i;
    }
  }
}

smallestMultiple();

/*Even Fibonacci numbers
Problem 4
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
Answer: 4613732
*/

function evenFibonacci() {
  var newArray = [1,2,3];
  var finalArray = 0;
  for (var i = 2; i <= 4000000; i++) {
    if (i === newArray[newArray.length - 2]) {
      newArray.push(i + newArray[newArray.length - 1]);
    }
  }
  for (var j = 0; j < newArray.length; j++) {
    if (newArray[j] % 2 === 0) {
      finalArray += newArray[j];
    }
  }
  return finalArray;
}

evenFibonacci();

//------------------------------------//
//            Week 3 Bonus            //
//------------------------------------//

/*
lengthOfHypotenuse
Write a function lengthOfHypotenuse(sideA, sideB) that takes in two numbers.
These numbers represent the sides of a right triangle that are adjacent to the right angle.
This function returns the length of the hypotenuse of the triangle.
Hint: To find the length of a hypotenuse, we can use the Pythagorean Theorem (a^2 + b^2 = c^2), where
c is the length of the hypotenuse, and a and b are the lengths of the remaining sides.*/

function lengthOfHypotenuse(sideA, sideB) {
  var hypotenuseSquare = Math.pow(sideA, 2) + Math.pow(sideB, 2);
  var hypotenuse = Math.sqrt(hypotenuseSquare);
  return hypotenuse;
}

lengthOfHypotenuse(2,2);
lengthOfHypotenuse(2,3);

/*collidingCircles
A circle is represented by a x-coordinate position, y-coordinate position, and radius (e.g. { x: 0, y: 0, radius: 1 }).
The x-y coordinates represent the position of its center.
Write a function collidingCircles(circle1, circle2) that takes in two circle objects as input and
returns true if the circles are colliding, otherwise false.

Hints:
The lengthOfHypotenuse function may be useful here.
Finding the difference between the two circles' coordinate positions will give you the length of two sides of a right triangle.*/

function collidingCircles(circle1, circle2){

}

function collidingCircles(circle1, circle2) {
  var xDist = circle1.x - circle2.x;
  var yDist = circle1.y - circle2.y;
  var dist = lengthOfHypotenuse(xDist, yDist)

  if (dist <= circle1.radius + circle2.radius) {
    return true;
  }
  return false;
}

var circle1 = {
  x: 2,
  y: 2,
  radius: 2
};

var circle2 = {
  x: 1,
  y: 1,
  radius: 1
};

var circle3 = {
  x: 10,
  y: 10,
  radius: 2
};

console.log(collidingCircles(circle1, circle2)); // => true
console.log(collidingCircles(circle1, circle3)); // => false
console.log(collidingCircles(circle2, circle3)); // => false

/*diagonalWalk
Write a function diagonalWalk(path) that takes a string (path) of characters as its input.
These characters will be either u, d, l, or r, representing moves "up", "down", "left", or "right", respectively.
The function returns true if we are along the diagonal axis of our starting position, false otherwise.
Assume each step moves us the same distance.*/

function diagonalWalk(path) {
  for (var i = 0; i < path.length; i++) {
    if (path[i] !== path[i+1]) {
      if (path[i] === "u" && path[i+1] === "d") {
        return false;
      }
      else if (path[i+1] === "u" && path[i] === "d") {
        return false;
      }
      else if (path[i] === "l" && path[i+1] === "r") {
        return false;
      }
      else if (path[i+1] === "l" && path[i] === "r") {
        return false;
      }
    }
    else if (path[i] === path[i+1]) {
      return false;
    }
  }
  return true;
}

diagonalWalk("urdl"); // true
diagonalWalk("urdldldl"); // true
diagonalWalk("urdlll"); // false


/*Predict The Output and Determine the value of this

function foo(){
  console.log(this.name);
}

var cat = {
  name : "whiskers"
}

var dog = {
  name : "rover"
}

foo(); //<=undefined
foo.bind(cat)(); //<=Whiskers
dog.foo(); //<=Error. dog.foo is not a function
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}//whiskers

var dog = {
  name : "rover"
}

var bar = cat.foo.bind(dog);

bar() //<=
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

setTimeout(cat.foo, 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
global.name = "currie";

var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
};

var dog = {
  name : "rover"
};


setTimeout(cat.foo.bind(this), 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

var dog = {
  name : "rover"
}

setTimeout(cat.foo.bind(dog), 1000);
*/

//------------------------------------//
//            Week 2 Bonus            //
//------------------------------------//
/* collisionDetected

A block is object that looks like this:
{
  x : 0,
  y : 0,
  width : 10,
  height : 10
}
Write a function collisionDetected(block1, block2) that returns true if block1 and block2 intersect, false otherwise. */

var blockA = {
  x : 2,
  y : 2,
  width : 3,
  height : 3
};

var blockB = {
  x : 3,
  y : -4,
  width : 13,
  height : 6
};

var blockC = {
  x : 0,
  y : -5,
  width : 8,
  height : 2
};

collisionDetected(blockA, blockB); // === true;
collisionDetected(blockA, blockC); // === false;
collisionDetected(blockC, blockB); // === true;


/* Debug the Programs */

function getPropsAndMethods(object){
  var propsAndMethods = {
                          props : [],
                          methods : []
                        };

  for(var x in object){
    if(typeof x === 'function'){
      propsAndMethods.methods.push(x);
    } else {
      propsAndMethods.props.push(x);
    }
  }

  return propsAndMethods;
}

var cat = {
  name : "Kitty",
  age : 7,
  purr : function(){
    return ("The " + this.age +" year old kitty purrs...");
  }
};

getPropsAndMethods(cat); // ==> { props : ["name", "age"], methods : ["purr"] }


//-----------------------------------------

function isLucky(runner){
  if(runner.luck > 10){
    return true;
  }

  return false;
}



function race(){
  var winner = null;

  for(var i = 0; i <= runners.length; i += 1){
    var runner = runners[i];
    var speed = runner.runningSpeed;

    if(isLucky(runner)){
      speed += 5;
    }

    if(speed > winner.runningSpeed){
      winner = runner;
    }
  }

  return winner.name;
}

var runners = [
  {
    name : "Jon",
    runningSpeed : 12,
    luck: 15
  },{
    name : "Anthony",
    runningSpeed : 5,
    luck : 26
  },{
    name : "Carl",
    runningSpeed : 13,
    luck : 8
  },
];

race(runners); // ==> "Jon"

/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.
Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(ary, n) {
  var finalArray = [];
  for (var i = 0; i < ary.length; i++) {
    var innerArray = ary[i];
    var counter = 0;
    for (var j = 0; j < innerArray.length; j++) {
      counter += innerArray[j];
      }
    if (counter === n) {
      finalArray.push(i);
    }
  }
  return finalArray;
}

var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];

arraySumN(ary1, 1); // => [0, 2]
arraySumN(ary2, 6); // => [0, 3]

/***************************************************************************
Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
It returns an object containing all of the keys found in both obj1 and
obj2. If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2. Otherwise, a key's value is its value
in the original object. Do not modify the arguments.

Example 1:
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
cat3; // => { name: "hellokitty", bow: "pink", color: "white"}

Example 2:
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
***************************************************************************/

function concatObjects(obj1, obj2) {
  var newObject = {}
  for (var key1 in obj1) {
    newObject[key1] = obj1[key1];
  }
  for (var key2 in obj2) {
    if (newObject[key2]) {
      newObject[key2] += obj2[key2];
    }
    else {
      newObject[key2] = obj2[key2];
    }
  }
  return newObject;
}

var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
concatObjects(cat1, cat2); // => { name: "hellokitty", bow: "pink", color: "white"}

var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}


/* deepIndexOf

Write a function deepIndexOf(array, val) that takes a 2-dimensional array and val as its parameters.
It returns an array containing the pairs of indices that represents the location of val in array.
If the element does not exist, return [ [-1, -1] ]. */

function deepIndexOf(array, val) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var secDimensionArray = array[i];
    for (var j = 0; j < secDimensionArray.length; j++) {
      if (secDimensionArray[j] === val) {
        newArray.push([i, j])
      }
    }
  }
  return newArray;
}

var ary = [
  [0, 2, 4],
  [1, 3, 9],
];

deepIndexOf(ary, 3); // => [ [1, 1] ]

var ary2 = [
  ["a", "b", "c"],
  [5, 0, 5, 0],
  [0, 1, 2]
];

deepIndexOf(ary2, 0); // => [ [1, 1], [1, 3], [2, 0] ]

//----------------------
/*Tic-Tac-Toe Project

Assume you have a 3 x 3 array:

[ [ , , ],
  [ , , ],
  [ , , ] ]
It represents a tic-tac-toe grid!
Spaces filled by "-" represent empty spots and spaces can be filled by either "X" or "O" representing marked spots.
For example,


Part 1

Write a function tttWon(grid) which takes a 3 x 3 grid array and returns true if there's a tic-tac-toe winner and false otherwise.
You can assume that grid is a 2D array fully filled with single character "-", "X", and "O"'s.
This program is a great time to practice decomposition (i.e. write helper functions).
If you're not sure about how to play tic-tac-toe, click here.

Hints:
Write tttHorizontal(grid) which takes grid and returns true if there's three in a row and false otherwise.
Write tttVertical(grid) which takes grid and returns true if there's three in a column and false otherwise.
Write tttDiagonal(grid) which takes grid and returns true if there's three in a diagonal and false otherwise.*/

function ttHorizontal(grid) {
  for (var i = 0; i < grid.length; i++) {
    var horizontalArray = grid[i];
    if (horizontalArray[0] === "X" || horizontalArray[0] === "0") {
      if (horizontalArray[0] === horizontalArray[1] && horizontalArray[0] === horizontalArray[2]) {
        return true;
      }
    }
  }
  return false;
}

function ttVertical(grid) {
  var firstRow = grid[0];
  var secondRow = grid[1];
  var thirdRow = grid[2];
  if (firstRow[0] === secondRow[0] && firstRow[0] === thirdRow[0] && firstRow[0] !== "-") {
    return true;
  }
  else if(firstRow[1] === secondRow[1] && firstRow[1] === thirdRow[1] && firstRow[1] !== "-") {
    return true;
  }
  else if(firstRow[2] === secondRow[2] && firstRow[2] === thirdRow[2] && firstRow[2] !== "-") {
    return true;
  }
  return false;
}

function ttDiagonal(grid) {
  if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== "-") {
    return true;
  }
  else if (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[1][1] !== "-") {
    return true;
  }
  return false;
}

function ttWon(grid) {
  if (ttHorizontal(grid)) {
    return true;
  }
  else if (ttVertical(grid)) {
    return true;
  }
  else if (ttDiagonal(grid)) {
    return true;
  }
  return false;
}

var grid1 = [
  ["-","X","O"],
  ["O","X","O"],
  ["-","X","-"] ];

var grid2 = [
  ["-","X","O"],
  ["O","X","X"],
  ["X","O","O"] ];

  tttWon(grid1); //  true
  tttWon(grid2); // false

/*
Part 2

Write a function tttWinner(grid) so that it returns the mark of the winner if there is a winner or "no winner!" otherwise.
You have the majority of the logic for this already; you just wrote it!
Modify your tttWon(grid) and your helper functions to solve for the winner. */

function tttWinner(grid) {
  if (tttWon(grid)) {
    if (tttDiagonal(grid)) {
      return grid[1][1];
    }
    else if (tttHorizontal(grid)) {
      return tttHorizontal(grid);
    }
    else if (tttVertical(grid)) {
      return tttVertical(grid);
    }
  }
  else {
    return("no winner");
  }
}

function tttWon(grid){
  if (tttHorizontal(grid)) {
    return true;
  }
  else if (tttVertical(grid)) {
    return true;
  }
  else if (tttDiagonal(grid)) {
    return true;
  }
  return false;
}

function tttHorizontal(grid) {
  for (var i = 0; i < grid.length; i++) {
    var winner = grid[i][0];
    if (grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]) {
      return winner;
    }
  }
}

function tttVertical(grid) {
  for (var i = 0; i < grid.length; i++) {
    var winner = grid[0][i];
    if (grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]) {
      return winner;
    }
  }
}

function tttDiagonal(grid) {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i][0] === grid[1][1] && grid[i][0] === grid[2][2]) {
      return true;
      }
    else if (grid[0][i] === grid[1][1] && grid[0][i] === grid[2][2]) {
      return true;
      }
  }
}

var grid1 = [
  ["-","X","O"],
  ["O","X","O"],
  ["-","X","-"] ];

var grid2 = [
  ["-","X","O"],
  ["O","X","X"],
  ["X","O","O"] ];


tttWinner(grid1); //"X"

tttWinner(grid2); // "no winner!"

//------------------------------------//
//            Week 1 Bonus            //
//------------------------------------//

/*dynamicFizzBuzz

Define a function dynamicFizzBuzz(max, num1, num2) that
takes three numbers as arguments and prints to the console every number from 0 to max
that is divisible by either num1 or num2, but not both. */

function dynamicFizzBuzz(max, num1, num2) {
  var newArray = [];
  for (var i = 0; i <= max; i++) {
    if (i % num1 === 0 && i % num2 !== 0) {
      newArray.push(i);
    }
    else if (i % num1 !== 0 && i % num2 === 0) {
      newArray.push(i);
    }
  }
  console.log(newArray);
}

dynamicFizzBuzz(20, 3, 5);

/* What will this program evaluate to?*/

var rickyBobbyJr = function(num) {
  if(num < -5) {
    return "Bobby";
  } else if(num < 5) {
    return "Ricky";
  } else {
    return "Junior";
  }
};
//It will give Bobby for everything lower than -5, Ricky for -5 to 4 and Junior for 5 and larger.


var makeNum = function(num) {
  return (num * 2) - (num * num);
};

var sayHi = function(n) {
  var x = makeNum(n);
  return "Hey now, " + rickyBobbyJr(x);
}

sayHi(3); //It will say Hey now Ricky

/*minMaxDifference

Write a function minMaxDifference(array) that return the difference between
the largest value and the smallest value in the array.
Assume array is an array of numbers. */

function minMaxDifference(array) {
  var min = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    else if (array[i] > max) {
      max = array[i];
    }
  }
  return max - min;
}

minMaxDifference([22,23,43,33,2,3,7,5,4,9,8,1,12,45,32,65,41,43])

/* dogsAndBones

You have 100 dogs (soo many dogs!).
You have arranged all your dogs in a line.
Initially, none of your dogs have any bones.
You take 100 rounds walking around the dogs, always starting at the beginning.
Every time you stop at a dog, you put a bone in it's mouth if it doesn't have one,
and you take away a bone if it has one on (so cruel).
The first round, you stop at every dog.
The second round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.).
The third round, you only stop at every 3rd dog (#3, #6, #9, #12, etc.).
You continue this process until the 100th round (i.e. you only visit the 100th dog).

Write a program dogsAndBones() that prints which dogs have bones at the end. */

function dogsAndBones() {
  var dogsArray = [];
  for (var i = 1; i < 101; i++) {
    dogsArray.push(i);
  }
  for (var j = 1; j < dogsArray.length; j++) {
    for (var k = j; k < dogsArray.length; k += j) {
      if (dogsArray[k] !== undefined) {
        dogsArray[k] = undefined;
      }
      else {
        dogsArray[k] = k;
      }
    }
  }
  return dogsArray;
}

dogsAndBones();

//------------------------------------//
//            Week 4 Day 1            //
//------------------------------------//

/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

DO NOT USE THE BUILT IN ARRAY#FOREACH METHOD

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach(array, cb){
  arr.forEach(function(ele, idx, arr){
    cb(ele, idx, arr);
  });
}

myForEach([5,12,-3], function(ele, i, arr){
  console.log(ele + " is at position " + i + " in array " + arr);
});

myForEach([5,12,-3], function(ele, i, arr){
  console.log(ele + " is at position " + i + " in array " + arr);
})

// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier.

Examples:
>
******************************************************************************/
function myMap(array, cb) {
  var newArray = []
  array.forEach(function(ele, idx, arr){
    newArray.push(cb(ele,idx));
  });
  return newArray;
}


myMap([1, 2, 3], function(ele, i, arr){
  return ele * i;
}) // [0, 2, 6] //return value
myMap([1, 2, 3], function(ele, i, arr){
  return ("This element is " + ele);
}) // ["This element is 1", "This element is 2", "This element is 3"] //return value


/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
******************************************************************************/

var students = [
  {"name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {"name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

function passingStudents(array) {
  var goodStudents = [];
  array.forEach(function(ele, idx, arr){
    var gradesTotal = 0;
    ele["grades"].forEach(function(el, id, ar){
      gradesTotal += ele["grades"][id]["score"];
    });
    if (gradesTotal / ele["grades"].length >= 70) {
      goodStudents.push(ele["name"]);
    }
  });
  return goodStudents;
}

passingStudents(students); //[ 'Kush', 'Ned' ] //return value

/******************************************************************************
Write a function laligatSequence(base, n)
A number's laligat sum is the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence
*******************************************************************************/
function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function primeNumbersSum(num) {
  var primesSum = 0;
  for (var i = 2; i < num; i++) {
    if (isPrime(i)) {
      primesSum += i;
    }
  }
  return primesSum;
}

function laligatSequence(base, n) {
  var laligatArray = [];
  laligatArray.push(base);
  for (var i = 1; i < n; i++) {
    laligatArray.push(primeNumbersSum(base));
    base = primeNumbersSum(base);
  }
  return laligatArray;
}

laligatSequence(10, 4); //[ 10, 17, 58, 381 ]

laligatSequence(5, 2); //[ 5, 10 ]

//------------------------------------//
//            Week 3 Day 5            //
//------------------------------------//

/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/

function myForEach(arr, cb) {
  arr.forEach(function(ele, idx, arr){
    cb(ele, idx, arr);
  });
}

myForEach([5,12,-3], function(ele, i, arr){
  console.log(ele + " is at position " + i + " in array " + arr);
});
// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value

/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/

function mySelect(arr, cb){
  var newArray = [];
  arr.forEach(function(ele, idx, arr){
    if (cb(ele,idx,arr)) {
      newArray.push(ele, idx);
    }
  });
  return newArray;
}

mySelect([5,12,-22,-3], function(ele, i, arr){
  return ele % 2 === 0;
}); //[12, -22] //return value

mySelect([5,12,-22,-3], function(ele, i, arr){
  return i % 2 === 0;
}) // [5, -22] //return value

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:
1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray
2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"
!!! Words that were originally caplitailzed must remained caplitailzed
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

//Newer solution with capitalization resolved
function inPigLatin(sentence) {
  var splitSentence = sentence.split(" ");
  var newArray = [];
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < splitSentence.length; i++) {
    var wordEval = splitSentence[i];
    if(vowels.indexOf(wordEval[0].toLowerCase()) !== -1) {
      newArray.push(wordEval + "yay");
    }
    else {
      var splitWordEval = wordEval.split("");
      for (var j = 0; j < splitWordEval.length; j++) {
        if (vowels.indexOf(splitWordEval[j]) !== -1) {
          newArray.push(splitWordEval.slice(j).join("") + splitWordEval.slice(0,j).join("") + "ay");
          break;
        }
      }
    }
  }
  for (var k = 0; k < newArray.length; k++) {
    if (newArray[k] !== newArray[k].toLowerCase()) {
      newArray[k] = newArray[k].slice(0,1).toUpperCase() + newArray[k].slice(1).toLowerCase();
    }
  }
  return newArray.join(" ");
}

//Older solution with capitalization not resolved
function inPigLatin(sentence) {
  var splitSentence = sentence.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  var newSentence = [];
  for (var i = 0; i < splitSentence.length; i++) {
    var word = splitSentence[i].toLowerCase();
    var counter = 0;
    for (var k = 0; k < word.length; k++) {
      if (vowels.indexOf(word[k]) === -1) {
        counter += 1;
        if (counter === word.length) {
          word = word + "ay";
          newSentence.push(word);
          break;
        }
      }
      else {
        word = word.slice(counter) + word.slice(0,counter) + "ay";
        newSentence.push(word);
        break;
      }
      if (vowels.indexOf(word[0]) !== -1) {
        word = word + "yay";
        newSentence.push(word);
        break;
      }
    }
  }
  return newSentence.join(" ")
}

inPigLatin("Shmanthony is the best teacher"); //Anthonyshmay isyay ethay estbay eachertay
inPigLatin("let us Dance"); //etlay usyay Anceday
inPigLatin("this is the time of my life"); //isthay isyay ethay imetay ofyay myay ifelay

//------------------------------------//
//            Week 3 Day 4            //
//------------------------------------//

/* Sentiment Detector
For this project, you will create a function detectSentiment(filename, sentence, callback).
It takes the following arguments:

filename: a string. The filename (and path) to the sentiment text file
sentence: a string. The sentence whose sentiment we will detect
callback: a function. This callback will be run after the sentiment score has been determined.
It will receive the sentence and score as arguments.

Examples

detectSentiment("sentimentDict.txt", "I love you", function(sentence, score){
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score){
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score){
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score){
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
var sentence = "I despise your hateful attitude";
detectSentiment("sentimentDict.txt", sentence, function(sentence, score){
  console.log("~~~~Example 5~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
When run in node it should output:

$ node yourSentimentDetectorFile.js
~~~~Example 1~~~~
'I love you' has a score of 2.
~~~~Example 2~~~~
'I LOVE you so much' has a score of 2.
~~~~Example 3~~~~
'You are a loveless fool' has a score of -2.
~~~~Example 5~~~~
'I despise your hateful attitude' has a score of -2.
~~~~Example 4~~~~
'I cherish your smile' has a score of 3.
Hints (feel free to try it without the hints first)

Start with the getRecordsFromFile function that we built in class. This will pass the callback you give it all the lines in the file as elements (strings) in an array.
In the callback that is being passed to getRecordsFromFile:

Initialize the score to 0.

Split the sentence into words. Sure, we could just use String.prototype.indexOf, but doing so would cause potential confusion between words that are similar but have different sentiments (e.g. "love" and "loveless")

Iterate over the records. For each record (which corresponds to a single line in the text file), you'll need to get the word and it's associated sentiment. Look at the text file. How can you parse this string to get the data you're looking for. Use decomposition to keep your code readable.

If the word is in the sentence...

and has a positive sentiment, add 1 to the score
and has a negative sentiment, subtract 1 from the score
Once the score has been found, run the callback that was passed to detectSentiment, passing in the sentence and the score as parameters. */

//------------------------------------//
//            Week 3 Day 3            //
//------------------------------------//

/*
Higher-Order Functions
Write a function myForEach(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built-in Array.prototype.forEach method. The return value is irrelevant.
 */

function myForEach(arr, cb) {
  arr.forEach(function(ele, idx, arr){
    cb(ele, idx, arr);
  });
}


 myForEach([1,2,3], function(ele, i, arr){
   console.log(ele + " is at position " + i + " in array " + arr);
 }); /*
 1 is at position 0 in array [1,2,3]
 2 is at position 1 in array [1,2,3]
 3 is at position 2 in array [1,2,3] */



/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns true.
*/

//forEach loop function
function mySelect(arr, cb) {
  var newArray = [];
  arr.forEach(function(ele, idx, arr){
    if (cb(ele,idx,arr)) {
      newArray.push(ele);
    }
  });
  return newArray;
}

mySelect([1,2,3,4,5,6], function(ele, i, arr){
  return (ele % 2 === 0);
}); // [2,4,6]

//for loop function
function mySelect(arr, cb) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i],i,arr)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


mySelect([1,2,3,4,5,6], function(ele, i, arr){
  return (i % 2 === 0);
}); // [1,3,5]

/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns false.

 */

function myReject(arr, cb) {
  var newArray = [];
  arr.forEach(function(ele,idx,arr){
    if (cb(ele,idx,arr) === false) {
      newArray.push(ele);
    }
  });
  return newArray;
}

 myReject([1,2,3,4,5,6], function(ele, i, arr){
   return (ele % 2 === 0);
 }); // [1,3,5]

 function myReject(arr, cb) {
   var newArray = [];
   arr.forEach(function(ele,idx,arr){
     if (cb(ele,idx,arr) === false) {
       newArray.push(idx);
     }
   });
   return newArray;
 }

 myReject([1,2,3,4,5,6], function(ele, i, arr){
   return (i % 2 === 0);
 }); // [2,4,6]


/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of the callback given the element in the corresponding position.
See the examples if this is confusing.*/

function myMap(arr, cb) {
  var newArray = [];
  arr.forEach(function(ele,idx,arr) {
    if (cb(ele, idx, arr)) {
      newArray.push(cb(ele,idx,arr));
    }
  });
  return newArray;
}

myMap([1,2,3], function(ele, i, arr){
  return ele * 2;
}); //[2, 4, 6]

myMap([1,2,3], function(ele, i, arr){
  return ele + i;
}); // [1, 3, 5]

myMap(["A", "B", "C"], function(ele, i, arr){
  return ele + i;
}); // ["A0", "B1", "C2"]



/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num and returns the value. */

function createExpFunc(num) {
  return function(num2) {
    return Math.pow(num2, num);
  }
}

var powerTwo = createExpFunc(2);
powerTwo(2); // 4
powerTwo(6); // 36

var powerThree = createExpFunc(3);
powerThree(2); // 8
powerThree(6); // 216

var powerTen = createExpFunc(10);
powerTen(2); // 1024
powerTen(6); // 60466176


//------------------------------------//
//            Week 3 Day 2            //
//------------------------------------//

/* Clock
For this mini-project, you will create a clock that ticks every second, displaying the current time.
READ ALL OF THE INSTRUCTIONS FIRST! Ask questions if you don't understand something.

Create a clock object;
Give it a property totalSeconds that starts at 0; */

var clock = {
  totalSeconds: 0,
  getSeconds: function() {
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) {
        console.log("0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) {
        console.log(clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 <= 9) {
        console.log("0" + clock.totalSeconds % 60);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 > 9) {
        console.log(clock.totalSeconds % 60);
      }
      clock.totalSeconds += 1;
    }, 1000);
  }
}

/* Write a method getSeconds that will return the second count of our clock.
It should return a value from 00 to 59, just like a normal clock.
hint: Think about this is terms of totalSeconds. If totalSeconds equals 10, then this method should return "10".
If totalSeconds is 61 (01:01), this method should return "01".
hint: Play with the modulus operator. If I modulo x by i (x % i), will the result ever be greater than i?
hint: If the value is less than 9, you may have to append a 0 to the beginning

Test you getSeconds method.
Open node and manually set the totalSeconds and make sure getSeconds is giving you the right value. Test cases below:
If clock.totalSeconds = 0, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 9, clock.getSeconds() will evaluate to "09"
If clock.totalSeconds = 13, clock.getSeconds() will evaluate to "13"
If clock.totalSeconds = 60, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 1342, clock.getSeconds() will evaluate to "22" */



/* Write a method getMinutes that will return the minute count of our clock.
It should return a value from 00 to 59, just like a normal clock.

hint: Write this in terms of totalSeconds, not the result of getSeconds?
Can you determine why? Think about it and if you're having trouble, call over the instructor.
hint: This will involve a few mathematical operations. How many minutes is 120 seconds? 2 minutes.
What math do we intuitively use to determine that?
hint: How many minutes are in 135 seconds? Still only 2 minutes.
The remainder exists as the second count. You may have to use some Math (hint hint) for cases like this.

Test your getMinutes method:

If clock.totalSeconds = 0, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 40, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 60, clock.getMinutes() will evaluate to "01"
If clock.totalSeconds = 134, clock.getMinutes() will evaluate to "02"
If clock.totalSeconds = 4342, clock.getMinutes() will evaluate to "12" */

var clock = {
  totalSeconds: 0,
  getSeconds: function() {
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) {// 0 to 9 seconds
        console.log("0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) {//more than nine but less than 60 seconds
        console.log(clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 <= 9) {//more than 60 seconds with a remainder of less than 9
        console.log("0" + clock.totalSeconds % 60);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 > 9) {//more than 60 seconds with a remainder of more than 9
        console.log(clock.totalSeconds % 60);
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getMinutes: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  }
}

clock.getMinutes();

/* Write a method getHours that will return minute count of our clock.
It can return any value from 00 to being arbitrarily high (i.e 72)

Test getHours:
If clock.totalSeconds = 0, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 200, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 4342, clock.getHours() will evaluate to "01"
If clock.totalSeconds = 20000, clock.getHours() will evaluate to "05"
If clock.totalSeconds = 900000, clock.getHours() will evaluate to "250" */

var clock = {
  totalSeconds: 0,
  getSeconds: function() {
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) {// 0 to 9 seconds
        console.log("0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) {//more than nine but less than 60 seconds
        console.log(clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 <= 9) {//more than 60 seconds with a remainder of less than 9
        console.log("0" + clock.totalSeconds % 60);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 > 9) {//more than 60 seconds with a remainder of more than 9
        console.log(clock.totalSeconds % 60);
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getMinutes: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getHours: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60)) % 60 + ":" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60)) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60)) % 60 + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60) % 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  }
}

clock.getHours();

/*
Write a method printTime that logs the time in clock format.
Use getHours, getMinutes, and getSeconds
You will need to do some concatenation

If clock.totalSeconds = 0, clock.printTime() will log "00:00:00"
If clock.totalSeconds = 200, clock.printTime() will log "00:03:20"
If clock.totalSeconds = 3871, clock.printTime() will log "01:04:31" */

var clock = {
  totalSeconds: 0,
  getSeconds: function() {
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) {// 0 to 9 seconds
        console.log("0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) {//more than nine but less than 60 seconds
        console.log(clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 <= 9) {//more than 60 seconds with a remainder of less than 9
        console.log("0" + clock.totalSeconds % 60);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 > 9) {//more than 60 seconds with a remainder of more than 9
        console.log(clock.totalSeconds % 60);
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getMinutes: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getHours: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  printTime: function(time){
    clock.totalSeconds = time;
    console.log(clock.getHours());
  }
}

clock.getHours();



/* Write a method tick(startSecond). What this method should do is outlined below:
If startSecond was passed in (we'll make it optional), set totalSeconds to be equal to it.
Increment totalSeconds.
Print the current time to the console.
Using either setTimeout or setInterval, make this behavior repeat itself every second.
Remember, arguments in Javascript are optional, so no need to worry about constantly setting the startSecond parameter.

Test is out. When you're done, you'll have a clock that prints out a new time every second!
Bonus: Try writing tick using both setTimeout and setInterval! I called my methods intervalTick and timeoutTick. */



//------------------------------------//
//            Week 3 Day 1            //
//------------------------------------//

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

function myIndexOf(array, ele) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      return i;
    }
  }
  return -1;
}

myIndexOf([1,2,3,4,5], 5); //=> 4
myIndexOf(["a", "b", "c"], "a"); //=> 0
myIndexOf(["a", "b", "c"], "d"); //=> -1

/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Example
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/

function minMaxProduct(array) {
  var min = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }

  return min * max;
}

minMaxProduct([0,1,2,3,4,5]); // => 0
minMaxProduct([5,4,3,2,1]); // => 5
minMaxProduct([4,2,5,1,-5]); // => -25

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2) {
  if (num1 === 1 || num2 === 1) {
    return num1 * num2;
  }
  else if(num1 % 2 === 0 && num1 / 2 !== 1) {
    return((num1 / 2) * num2);
  }
  else if(num2 % 2 === 0 && num2 / 2 !== 1) {
    return(num1 * (num2 / 2));
  }
  else {
    return num1 * num2;
  }
}

leastCommonMultiple(2, 3); // => 6
leastCommonMultiple(6, 10); // => 30
leastCommonMultiple(24, 26); // => 312

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

function hipsterfy(sentence) {
  var newSentence = "";
  var vowels = ["a", "e", "i", "o", "u"];
  splitSentence = sentence.split(" ");
  for (var i = splitSentence.length - 1; i >= 0; i--) {
    var counter = 0;
    if (vowels.indexOf(splitSentence[i] !== -1)) {
      counter += 1;
      splitSentence[i] = "";
      if (counter === 1) {
        break;
      }
    }
  }
  return splitSentence.join(" ");
}

//Solutions as per 20180320
//ES6
function hipsterfy(sentence){
  return sentence.split(" ").map((el) => el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("")).join(" ");
}


//ES5
function hipsterfy(sentence){
  var sentenceArr = sentence.split(" ");
  var newSentence = sentenceArr.map(function(el) {
    return el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("");
  });
  return newSentence.join(" ");
}

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"



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

function magicCipher(sentence, cipher) {
  var newString = [];
  var splitSentence = sentence.split("")
  for (var i = 0; i < splitSentence.length; i++) {
    if (cipher[splitSentence[i]] === undefined) {
      continue;
    }
    else {
      splitSentence[i] = cipher[splitSentence[i]];
    }
  }
  return splitSentence.join("");
}

magicCipher("add me on facebook" , { a : "c", d : "q"}); // => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}); // => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}); // => "dance"

//------------------------------------//
//            Week 2 Day 5            //
//------------------------------------//

/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.

** Examples:
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [0, 4], [1, 3] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

var divisibleByFivePairSum = function(array) {
  var newArray = [];
  array.forEach(function(ele, idx, arr) {
    array.forEach(function(el, id, ar) {
      if ((ele + el) % 5 === 0 && idx < id) {
        newArray.push([idx, id])
      }
    });
  });
  return newArray;
}


divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [0, 4], [1, 3] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)

** Examples:
** myIndexOf([1, 2, 3, 4, 5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      return i;
    }
  }
  return -1;
}

myIndexOf([1, 2, 3, 4, 5], 5); // => 4
myIndexOf(["a", "b", "c"], "a"); // => 0
myIndexOf(["a", "b", "c"], "d"); // => -1

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
  var splitSentence = sentence.split("");
  for (var i = 0; i < splitSentence.length; i++) {
    if (cipher[splitSentence[i]] !== undefined) {
      splitSentence[i] =  cipher[splitSentence[i]]
    }
    newString = splitSentence.join("");
  }
  return newString;
}

function magicCipher(sentence, cipher) {
  var newString = "";
  var splitSentence = sentence.split("");
  for (var i = 0; i < splitSentence.length; i++) {
    if (cipher[splitSentence[i]] === undefined) {
      continue;
    }
    else {
      splitSentence[i] = cipher[splitSentence[i]];
    }
  }
  newString = splitSentence.join("");
  return newString;
}


magicCipher("add me on facebook" , { a : "c", d : "q"}); // => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}); // => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}); // => "dance"


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
  var smallValue = array[0];
  var largeValue = array[0];
  for (var i = 1; i < array.length; i++) {
    if (smallValue > array[i]) {
      smallValue = array[i];
    }
    if (largeValue < array[i]) {
      largeValue = array[i];
    }
  }
  return largeValue - smallValue;
}

minMaxDifference([1,2,3,4,5]); // => 4
minMaxDifference([5,4,3,2,1]); // => 4
minMaxDifference([4,2,5,1,-5]); // => 10


/******************************************************************************
** Write a function that #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.

** Examples:
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/

function dynamicFizzBuzz(max, num1, num2) {
  var newArray = [];
  for (var i = 1; i < max; i++) {
    if (i % num1 === 0 && i % num2 !== 0) {
      newArray.push(i);
    }
    else if (i % num2 === 0 && i % num1 !== 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

dynamicFizzBuzz(20, 5, 3); // => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6); // => [4, 6, 8, 16, 18]



//------------------------------------//
//            Week 2 Day 4            //
//------------------------------------//
// Read These Programs

var foo = 5;

function bar(){
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); //What is foo on this line? --> 5
console.log(bar()); //What is bar() on this line? --> Anthony (the variable returned is foo which equals to "Anthony")
console.log(foo); //What is foo on this line?  --> 5

//-------------------------------------------
var foo = 5;

function bar(foo){
  return foo + 65;
}

console.log(foo); //What is foo on this line? --> 5
console.log(bar(5)); //What is bar() on this line? --> 70?
console.log(foo); //What is foo on this line? --> 5
console.log(bar(5)); //What is bar() on this line? --> 70?

//-------------------------------------------

var foo = "Happy";

for(var foo = 0; foo <= 5; foo += 1){
  console.log(foo); //What will foo be on each iteration? --> 0,1,2,3,4,5
}

console.log(foo); //What will foo be on this line? --> 6 - Not happy because
//the var foo = 0 is not within a function so therefore not within a scope.

//------------------------------------

var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line? --> 1: 5

function foo(){
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line? --> 3: 10

  var innerFoo = function(){
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line? --> 4: 10 (not 15 bacause bar = 15 in innerFoo becomes global but
    //it does not affect the bar = 10 in function foo)
}

console.log("2: " + bar); //2: What will bar be on this line? --> 2: 15 - incorrect, it is 2:5 because the bar in
// irrerFoo was not called
foo();
console.log("5: " + bar); //5: What will bar be on this line? --> 5: 15 - incorrect, it is 5:5 because the bar in
// irrerFoo was not called

//-----------------------------------

var bar = "dance";

function foo(){
  bar = 10;

  var innerFoo = function(){
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line? --> 2: 10
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line? --> 3: 10
}

console.log("1: " + bar); //1: What will bar be on this line? --> 1: 10 (not dance because bar in the function foo does not have a var terminology)
foo(); //2: 10 3: 10
console.log("4: " + bar); //4: What will bar be on this line? --> 4: 10 (not dance because bar in the function foo does not have a var terminology)

/* Factorial
Write a function factorial(n), that returns the factorial of the number n. Example: factorial(4) => 4 * 3 * 2 * 1 => 24*/

function factorial(n) {
  var number = 1;
  for (var i = n; i >= 1; i--) {
    number *= i;
  }
  return number;
}

factorial(1); //1
factorial(4); //24
factorial(5); //120
factorial(10); //3628800

/* Long Word Count
Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters. */

var longWordCount = function(string) {
  var splitString = string.split(" ");
  count = 0;
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].length > 7) {
      count += 1;
    }
  }
  return count;
}

//forEach loop
var longWordCount = function(string) {
  var splitString = string.split(" ");
  count = 0;
  splitString.forEach(function(ele,idx,arr) {
    if (ele.length > 7) {
      count += 1;
    }
  });
  return count;
}

longWordCount(""); //0
longWordCount("short words only"); //0
longWordCount("one reallylong word"); //1
longWordCount("two reallylong words inthisstring"); //2
longWordCount("allwordword longwordword wordswordword"); //3
longWordCount("seventy schfifty five"); //1

/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs. */

var lcm = function(num1, num2) {
  var multiple = num1 * num2;
  if (num1 % 2 === 0) {
    multiple = (num1 / 2) * num2;
  }
  else if (num2 % 2 === 0) {
    multiple = (num2 / 2) * num1;
  }
  return multiple;
}

//Solution as of 20180402
function lcm(num1, num2) {
  var leastMultiple = num1 * num2;
  while(leastMultiple % num1 === 0 && leastMultiple % num2 === 0){
    leastMultiple /= 2;
  }
  return leastMultiple * 2;
}

lcm(2, 3); //6
lcm(6, 10); //30
lcm(24, 26); //312


/* Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel. */

//Newer fast Solution
function hipsterfy(sentence) {
  var splitSentence = sentence.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  var newSentence = [];
  for (var i = 0; i < splitSentence.length; i++) {
    var wordEval = splitSentence[i];
    for (var j = wordEval.length - 1; j >= 0; j--) {
      if(vowels.indexOf(wordEval[j]) !== -1) {
        newSentence.push(wordEval.slice(0,j) + wordEval.slice(j+1));
        break;
      }
    }
  }
  return newSentence.join(" ");
}

//Old long Solution
var words = function(sentence) {
  var wordArray = [];
  var vowels = ["a", "e", "i", "o", "u"];
  var splitSentence = sentence.split(" ");
  for (var i = 0; i < splitSentence.length; i++) {
    wordArray.push(splitSentence[i]);
  }
  return(wordArray);
}

var hipsterfy = function(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var wordsOfSentence = words(sentence);
  var joinedletters = [];
  for (var i = 0; i < wordsOfSentence.length; i++) {
    var hipsterwords = [];
    var singleWord = wordsOfSentence[i];
    var counter = 0;
    for (var k = singleWord.length; k >= 0; k--) {
      if (vowels.indexOf(singleWord[k]) === -1) {
        hipsterwords.unshift(singleWord[k]);
      }
      else if (vowels.indexOf(singleWord[k]) !== -1) {
        counter += 1;
        if (counter === 1) {
          continue;
        }
        else {
          hipsterwords.unshift(singleWord[k]);
        }
      }
    }
    joinedletters.push(hipsterwords.join(""))
  }
  return(joinedletters.join(" "));
}

hipsterfy("proper"); //"propr"
hipsterfy("proper tonic panther"); //"propr tonc panthr"
hipsterfy("towel flicker banana"); //"towl flickr banan"
hipsterfy("runner anaconda"); //"runnr anacond"
hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"



//------------------------------------//
//            Week 2 Day 3            //
//------------------------------------//

/* Debug These Programs */
//------correct-----------
function unique(array){
  var uniqueArray = [];

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(uniqueArray.indexOf(ele) === -1){
      uniqueArray.push(ele);
    }
  }
  return uniqueArray;
}

unique([1,23,2,4,5,1,23]) // [1, 23, 2, 4, 5];

//------correct----------
function isHappy(person){
  if(person.happiness > 5){
    return true;
  }
  return false;
}

function isHappyGroup(group){
  var amount = 0;

  for(var i = 0; i < group.length; i += 1){
    var person = group[i];

    if(isHappy(person)){
      amount += 1;
    }
  }

  if(amount > 5){
    return true;
  }

  return false;
}

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

isHappyGroup(people); //true

//-----correct-----
var magicify = function(number) {
  return(number - 34);
}

var isMagicNumer = function(number){
  var magicNumb = magicify(number);

  if(magicNumb % 13 === 0 || magicNumb < 0){
    return true;
  }

  return false;
}

isMagicNumer(26); //==> true
isMagicNumer(50); //==> false


//------correct--------
function howHigh(height){
  return (height + " feet high!");
}

function jump(height){
  return "I'm jumping " + howHigh(height);
}

jump(5); // === "I'm jumping 5 feet high!";
jump(12); // === "I'm jumping 12 feet high!";

//---correct----
function fizzBuzz(max){
  var i = 1;
  var array = [];

  while(i < max){
    if((i % 5 === 0 || i % 3 === 0) && i !== 15){
      array.push(i);
    }
    i += 1;
  }

  return array;
}

/*titleize

Write a function titleize(title, stopWords) that takes in a string title and and array of strings stopWords.
Return the title where every word that does not exist in the stopWords array is capitalized; all others lowercase.

Hints
Test after you write every function!

First write a function containsPunctuation(word) that takes in a single word
and returns true if the word contains a punctuation mark.
Feel free to use the punctuation array we've given you below.

Second, write a function isStopWord(word, stopWords) that takes in a single word and returns true if it is a stop word. The check will vary depending on if the word contains punctuation or not. Using Array.prototype.indexOf will not work in all cases. See the third example.

Third, write the titleize function, using the functions you wrote before.

"hey"[0] returns a copy of h, not the original h, therefore:
var myStr = "hey"
myStr[0] = "w"
myStr === "hey", not "wey"
Remember Array.prototype.slice? If not, look at the documentation and play in the console.
var punctuation = [";", "!", ".", "?", ",", "-"];
>titleize("forest gump, the runner", ["the"])
"Forest Gump, the Runner"

>titleize("MASTER AND COMMANDER", ["and"])
"Master and Commander"

>titleize("i LOVE; lover of mine", ["love", "of"])
"I love; Lover of Mine"

>titleize("shall we dance?", ["dance"])
"Shall We dance?" */

//First function
function containsPunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  for (var i = 0; i < word.length; i++) {
    if (punctuation.indexOf(word[i]) !== -1) {
      return true;
    }
  }
  return false;
}

containsPunctuation("word!");

//Second function
function isStopWord(word, stopWords) {
  splitWord = word.split("");
  newWord = [];
  for (var i = 0; i < splitWord.length; i++) {
    if (containsPunctuation(splitWord[i])) {
      continue;
    }
    newWord.push(splitWord[i]);
  }
  if (newWord.join("") !== word) {
    word = newWord.join("")
  }
  if(stopWords.indexOf(word) === -1) {
    return false;
  }
  return true;
}

isStopWord("word!", ["word", "world", "sword"]);

//Third function
function titleize(title, stopWords) {
  newTitle = [];
  splitTitle = title.toLowerCase().split(" ")
  for (var i = 0; i < splitTitle.length; i++) {
    if (isStopWord(splitTitle[i], stopWords)) {
      newTitle.push(splitTitle[i]);
    }
    else {
      newTitle.push(splitTitle[i].slice(0,1).toUpperCase() + splitTitle[i].slice(1));
    }
  }
  return newTitle.join(" ");
}

titleize("forest gump, the runner", ["the"]); //"Forest Gump, the Runner"
titleize("MASTER AND COMMANDER", ["and"]); //"Master and Commander"
titleize("i LOVE; lover of mine", ["love", "of"]); //"I love; Lover of Mine"
titleize("shall we dance?", ["dance"]); //"Shall We dance?"

//------------------------------------//
//            Week 2 Day 2            //
//------------------------------------//

/* divisibleByThreePairSum

Write a function divisibleByThreePairSum(array) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of three.

> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]] */

function divisibleByThreePairSum(array) {
    var pairsArray = [];
    for (var i = 0; i < array.length; i++) {
      for (var k = i+1; k < array.length; k++) {
        if (i === k) {
          continue;
        }
        else if ((array[i] + array[k]) % 3 === 0) {
          pairsArray.push([i, k]);
        }
      }
    }
    return pairsArray;
}

divisibleByThreePairSum([1, 6, 3, 4, 2, 0]); //[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
divisibleByThreePairSum([8, 3, 5, 9, 2]); //[[1, 3]] */


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
  var pairsSumZero = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
      if (array[i] + array[k] === 0) {
        pairsSumZero.push([i, k]);
      }
    }
  }
  return pairsSumZero;
}

pairZero([4, 1, 0,]); //[ ]
pairZero([1, 2, -1]); //[ [0, 2] ]
pairZero([0, 2, 5, -2, 0]); //[ [0, 4], [1, 3] ]

/* isValidEmail
>isValidEmail("junk@gmail.com"); --> true
>isValidEmail("now.what@now.co"); --> true
>isValidEmail("i_am_happy@feelings.net"); --> true
>isValidEmail("my@website@gmail.com"); --> false
>isValidEmail("webby@gmail.co.net"); --> false
>isValidEmail("anthony@ira_ladson.com"); --> false
>isValidEmail("anthony!@ladson.com"); --> false

Write a function isValidEmail(email) that takes an email string. Return true if the email is considered valid. A valid email:
Contains one and only one "@" symbol
All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
There is one and only one dot "." after the "@" symbol
Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];*/

function isValidEmail(email) {
  var acceptedSymbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "1","2","3","4","5","6","7","8","9","0",".","_"];
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Contains one and only one "@" symbol
  var splitAtEmail = email.split("@");
  if (splitAtEmail.length > 2) {
    return false;
  }
  // All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
  var emailFirstHalf = splitAtEmail[0];
  for (var i = 0; i < emailFirstHalf.length; i++) {
    if (acceptedSymbols.indexOf(emailFirstHalf[i]) === -1) {
      return false;
    }
  }
  // There is one and only one dot "." after the "@" symbol
  var splitDotEmail = splitAtEmail[1].split(".");
  if (splitDotEmail.length > 2) {
    return false;
  }
  // Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)
  var emailSecondHalf = splitDotEmail[0];
  for (var j = 0; j < emailSecondHalf.length; j++) {
    if (alphabet.indexOf(emailSecondHalf[j]) === -1) {
      return false;
    }
  }
  return true;
}

isValidEmail("junk@gmail.com"); //--> true
isValidEmail("now.what@now.co"); //--> true
isValidEmail("i_am_happy@feelings.net"); //--> true
isValidEmail("my@website@gmail.com"); //--> false
isValidEmail("webby@gmail.co.net"); //--> false
isValidEmail("anthony@ira_ladson.com"); //--> false
isValidEmail("anthony!@ladson.com"); //--> false */

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

function peakFinder(array) {
  var peaks = [];
  if (array[0] > array[1]) {
    peaks.push(0);
  }
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peaks.push(i);
    }
  }
  if (array[array.length - 1] > array[array.length - 2]) {
    peaks.push(array.length - 1);
  }
  return peaks;
}

peakFinder([1,2,3,2,1]); //[2]
peakFinder([2,1,2,3,4,5]); //[0, 5]
peakFinder([4,6,9,4,2,-7,2,-4,5]); //[2,6,8]

//------------------------------------//
//            Week 2 Day 1            //
//------------------------------------//
/*
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
  var splitString = sentence.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    if (sentence[i] === "I") {
      splitString.shift(sentence[i]);
      splitString.unshift("we"); //This one returns the right result
    } else if (sentence[i] === "mine...") {
      console.log(sentence[i]);
      splitString.replace(sentence[i], "ours");
    }
  }
  return splitString.join(" ");
}

//solution from Winnie
function royalWe(sentence) {
  var royalSentence = [];
  var words = sentence.split(" ");
  var pronouns = ["I", "mine", "my", "me"];
  for (var i = 0; i < words.length; i++) {
    if(pronouns.indexOf(words[i]) !== -1) {
      if (words[i] === "I") {
        royalSentence.push("we");
      } else if (words[i] = "mine") {
        royalSentence.push("ours");
      } else if (words[i] = "my") {
        royalSentence.push("our");
      } else {
        royalSentence.push("us");
      }
    }
    royalSentence.push(words[i]);
  }
  return royalSentence.join(" ");
}

//Solution 2 based only on split and join
function royalWe(sentence) {
  var replaceI = sentence.split("I").join.("we");
  var replaceMine = sentence.split("Mine").join.("ours");
  var replaceMy = sentence.split("My").join.("our");
  var replaceMe = sentence.split("Me").join.("us");

  return replaceMe;
}

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

function elementCount(array) {
  var counter = {};
  for (var i = 0; i < array.length; i++) {
    if (counter[array[i]] === undefined) {
      console.log(counter);
      counter[array[i]] = 1;
    }
    else {
      counter[array[i]] +=1;
    }
  }
  return counter;
}

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
  var splitSentence = sentence.split(" ");
  var finalString = [];
  for (var i = 0; i < splitSentence.length; i++) {
    var word = splitSentence[i];
    if (word.slice(0,1) === "I") {
      finalString.push("we" + word.slice(1, word.length));
    }
    else if(word.slice(0,3) === "mine") {
      finalString.push("ours" + word.slice(3, word.length));
    }
    else if(word.slice(0,2) === "my") {
      finalString.push("our" + word.slice(2, word.length));
    }
    else if(word.slice(0,2) === "me") {
      finalString.push("us" + word.slice(2, word.length));
    }
    else {
      finalString.push(word);
    }
  }
  return finalString.join(" ");
}

royalWe("I want to go to the store."); //=> "we want to go to the store."
royalWe("This is my house and you will respect me!"); //=> "This is our house and you will respect us!"
royalWe("This is mine..."); //=> "This is ours..."
royalWe("Jump for my love"); //=> "Jump for our love"


//Long solution
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

elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }

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

//------------------------------------//
//            Week 1 Day 4            //
//------------------------------------//

/* Cookie Monster Project

For this project, we are going to make a cookieMonster object.
Type mocha in the command prompt/terminal to see all the failing tests. Your job will be to make them all pass.

Look at the first failing test.
It is expecting cookieMonster to have a property called name that evaluates to Fred.
In cookieMonster.js, add the property name and set it to Fred.

Run mocha again. Yay! The spec has passed.
Now fix all the "initial properties" specs.

We are going to create two methods #eat(food) and #isAlrightMeal(food):

#eat(food): returns a score (integer). food is an array of of string food items.
Every food item that is a favorite food add +2 to the score;
good foods add +1;
bad foods add -1;
hated foods add -2.
Make sure the spec passes.

#isAlrightMeal(food): return true if the food score is within -1, 1. */

var cookieMonster = {
  name : "Fred",
  hair: "blue",
  favoriteFoods: ["cookies"],
  goodFoods: ["pizza", "skittles"],
  badFoods: ["water", "banana"],
  hatedFoods: ["spinach"],
  eat: function(food) {
    var score = 0;
    for (var i = 0; i < food.length; i++) {
      if (this.favoriteFoods.indexOf(food[i].toLowerCase()) !== -1) {
        score += 2;
      }
      else if (this.goodFoods.indexOf(food[i].toLowerCase()) !== -1) {
        score += 1;
      }
      else if (this.badFoods.indexOf(food[i].toLowerCase()) !== -1) {
        score -= 1;
      }
      else if (this.hatedFoods.indexOf(food[i].toLowerCase()) !== -1) {
        score -= 2;
      }
    }
    return score;
  },
  isAlrightMeal: function(food) {
    if (this.eat(food) >= -1 && this.eat(food) <= 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

//------------------------------------//
//            Week 1 Day 3            //
//------------------------------------//

/* Arrays
logEach
Write a function logEach(array) that prints every element of the array and its index to the console . Example:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson */

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(i + ": " + array[i]);
  }
}

logEach(["Anthony", "John", "Carson"]);

/* maxValue
Write a function maxValue(array) that returns the largest value in the array. Assume array is an array of numbers.
> maxValue([43, 12, 6, 2])
43
> maxValue([])
null
> maxValue([-4, -10, 0.43])
0.43 */

function maxValue(array) {
  var max = array[0];
  if (array[0] === undefined) {
    return null;
  }
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

maxValue([43, 12, 6, 2]); //43
maxValue([]); //null
maxValue([-4, -10, 0.43]); //0.43 */

/* printRange

Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead. Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */

function printRange(start,end) {
  if (start > end) {
    console.log("Bad Range");
  }
  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}

printRange(22, 24); //22 23 24
printRange(5, 1); //Bad Range

/* Functions
isPrime
Write a function isPrime(number) that returns a boolean indicating if number is prime or not.
Assume number is a positive integer.

> isPrime(2)
true
>isPrime(1693)
true
> isPrime(15)
false
> isPrime(303212)
false */

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(2); //true
isPrime(1693); //true
isPrime(15); //false
isPrime(303212); //false */

/* firstNPrimes
Using isPrime, write a function firstNPrimes(n) that returns an array of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */

function firstNPrimes(n) {
  var firstPrimesArray = [];
  if (n === 0) {
    return [];
  }
  for (var i = 2; ; i++) {
    if(isPrime(i)) {
      firstPrimesArray.push(i);
      if (firstPrimesArray.length === n) {
        break;
      }
    }
  }
  return firstPrimesArray;
}

firstNPrimes(0); //[]
firstNPrimes(1); //[2]
firstNPrimes(4); //[2, 3, 5, 7]

/* sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */

function sumOfNPrimes(n) {
  var sum = 0;
  if (n === 0) {
    sum = 0;
  }
  for (var i = 0 ; i < n; i++) {
    sum = sum + firstNPrimes(n)[i];
  }
  return sum;
}

sumOfNPrimes(0); //0
sumOfNPrimes(1); //2
sumOfNPrimes(4); //17

//------------------------------------//
//            Week 1 Day 2            //
//------------------------------------//

/* logBetween

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
Inclusive means that the the range that will be printed will include the lowNum and highNum.

> logBetween(-1, 2)
-1
0
1
2
>logBetween(14, 6)
// nothing gets printed

> logBetween(4,6)
4
5
6 */

function logBetween(lowNum, highNum) {
  for (var i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

logBetween(-1, 2); // from -1 to 2
logBetween(14, 6); //nothing printed
logBetween(4,6); //from 4 to 6

/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints to the console every number
from 0 to max that is divisible by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18 */

function fizzBuzz(max) {
  for (var i = 1; i < max; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log(i);
    }
    else if(i % 5 === 0) {
      console.log(i);
    }
  }
}

fizzBuzz(20);

/* What will these evaluate to? */

function func1(num) {
  return num + 50;
}
function func2(num) {
  return num + " bottles of beer on the wall";
}
function func3(num) {
  var x = func1(num);
  return func2(x);
}

func3(5);
//Answer: 55 bottles of beer on the wall


var foo = function(name) {
  return "Dance " + name + ", dance! "
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

bar();


/* isFactorOf

Define a function isFactorOf(number, factor) that returns true if factor is a factor of number. Otherwise, false.

> isFactorOf(6,2)
true

> isFactorOf(-6, 2)
true

> isFactorOf(5,0)
false */

function isFactorOf(number, factor) {
  if (number % factor === 0) {
    return true;
  }
  return false;
}

isFactorOf(6,2); //true
isFactorOf(-6, 2); //true
isFactorOf(5,0); //false

/* isPrime
Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.*/

function isPrime(number) {
  if (number === 2) {
    return true;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(2); //true
isPrime(10); //false
isPrime(15485863); //true
isPrime(3548563); //false

/*Debug The Program */

function sayHiNTimes(n) {
  var i = 0;

  while (i < n) {
    console.log("Hi");
    i++ //Added this line
  }
}

function isFive(n) {
  if (n === 5) { //Replaced from = to ===
    return true;
  }
  else {
    return false;
  }
}

//------------------------------------//
//            Week 1 Day 1            //
//------------------------------------//

/* Numbers
isOdd
Input: A Number.
Output: A Boolean. true if the number is odd, otherwise false*/

function isOdd(num) {
  return(num % 2 !== 0);
}

isOdd(2);
isOdd(5);
isOdd(-17);

/* plusFive
Input: A Number.
Output: A Number. The sum of the input and 5.*/

function plusFive(num) {
  return(num + 5);
}

plusFive(0); //5
plusFive(-2); //3
plusFive(21); //26

/* threeOrSeven
Input: A Number.
Output: A Boolean. true if the number is divisible by 3 or 7*/

function threeOrSeven(num) {
  return(num % 3 === 0|| num % 7 === 0);
}

threeOrSeven(3); //true
threeOrSeven(42); //true
threeOrSeven(8); //false

/* Order of Operations
Evaluate each expression. Check your answer in the console.
1 + 1 * 5
(1 + 1) * 5
1 + 2 - 5 / 6 - 1
5 * 5 % 13
5/(-1 * (5 - (-10))) */

console.log("No code needed for this")

/* Strings
hello
Input: A String.
Output: A String saying "Hello" to the input value.*/

function hello(string) {
  return("Hello " + string);
}

hello("child"); //"Hello, child."
hello("Anthony"); //"Hello, Anthony."
hello("fsfvf"); //"Hello, fsfvf."

/* yell
Input: A String. Assume no punctuation.
Output: A String. A yelled version of the input.*/

function yell(string) {
  return string.toUpperCase();
}

yell("I want to go to the store"); //"I WANT TO GO TO THE STORE!!!"
yell("Time to program"); //"TIME TO PROGRAM!!!"


/* whisper
Input: A String. Assume no punctuation.
Output: A String. A whispered version of the input.

> whisper("Hey Anthony")
"...hey anthony..."
> whisper("YEA! that was fun")
"...yea! that was fun..." */

function whisper(string) {
  return("..." + string.toLowerCase() + "...");
}

whisper("Hey Anthony"); //"...hey anthony..."
whisper("YEA! that was fun"); //"...yea! that was fun..."

/* isSubstring
Input
1) A String, called searchString.
2) A String, called subString.
Output: A Boolean. true is the subString is apart of the searchString.
> isSubstring("The cat went to the store", "he cat went")
true

> isSubstring("Time to program", "time")
true
> isSubstring("Jump for joy", "joys")
false */
//my solution
function isSubstring(searchString, subString) {
  for (var i = 0; i < searchString.length; i++) {
    if (searchString[i].toLowerCase() === subString[0] && subString === searchString.slice(i,subString.length + i).toLowerCase()) {
      return true;
    }
  }
  return false;
}

//solution from app academy
function isSubstring(searchString, subString) {
  var lowercaseSearchString = searchString.toLowerCase();
  var lowercaseSubString = subString.toLowerCase();
  return lowercaseSearchString.indexOf(lowercaseSubString) !== -1;
}


isSubstring("Time to program", "time"); //true
isSubstring("Jump for joy", "joys"); //false

//---forEach loop - Not correct. Going inside the if statement correctly but returning false.
//Probably because I have not created a callback function
function isSubstring(searchString, substring) {
  var splitString = searchString.toLowerCase().split(" ");
  console.log(splitString);
  this.splitString.forEach(function(ele,idx,arr) {
    console.log("Now testing '" + ele + "' and compare it to -->" + substring);
    if(ele === substring) {
      console.log("We went inside the if statement");
      return ele;
      return substring;
      return true;
    }
  });
  //return false;
}

isSubstring("Time to program", "time"); //true
isSubstring("Jump for joy", "joys"); //false


/* echo
Input: A String.
Output: A String. The input string string echo-ized.

> echo("Mom!")
"MOM! ... Mom! ... mom!"
> echo("hey")
"HEY ... hey ... hey"
> echo("JUMp")
"JUMP ... JUMp ... jump" */

function echo(string) {
  return(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
}
echo("Mom!");
echo("hey");
echo("JUMp");


/* Boolean
isEven
Input: A Number.
Output: A Boolean. true if the number is even, otherwise false
Condition: Must be written in terms of isOdd

> isEven(2)
true
> isEven(5)
false */

var isEven = function(num) {
  return(num % 2 === 0)
}

isEven(2); //true
isEven(5); //false

// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false

function isOdd(num) { // given function
  return (num % 2 !== 0);
}

function isEven(num) {
  return isOdd(num) === false;
}

//solution from app academyfunction isOdd(num) { // given function
function isOdd(num) { // given function
  return (num % 2 !== 0);
}

function isEven(num) {
  var bool = isOdd(num);
  return !bool;
}

isEven(2) //=> true
isEven(5) //=> false
isEven(-55) //=> false
