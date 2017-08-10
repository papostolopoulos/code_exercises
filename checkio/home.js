/*
Non-unique Elements https://js.checkio.org/mission/non-unique-elements/
You are given a non-empty list of integers (X). For this task, you should return
a list consisting of only the non-unique elements in this list. To do so you will
need to remove all unique elements (elements which are contained in a given list
only once). When solving this task, do not change the order of the list.

Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]

*/

function nonUniqueElements(array) {
  var countObj = {};
  for (var i = 0; i < array.length; i++) {
    countObj[array[i]] === undefined ? countObj[array[i]] = 1 : countObj[array[i]] += 1;
  }
  console.log(countObj);

  var endArr = []
  for (var j = 0; j < array.length; j++) {
    countObj[array[j].toString()] === 1 || endArr.push(array[j]);
  }

  return endArr;
}

nonUniqueElements([1, 2, 3, 1, 3])




//Solution that is good but not valid. I am returning only the non unique numbers
//once while the problem wants me to return the array with the numbers repetitively
//So instead of [1,3] I need to return [1,3,1,3]
function nonUniqueElements(array) {
  var countObj = {};
  for (var i = 0; i < array.length; i++) {
    countObj[array[i]] === undefined ? countObj[array[i]] = 1 : countObj[array[i]] += 1;
  }

  var endArr = [];
  for (var key in countObj) {

    countObj[key] === 1 || endArr.push(Number(key)); //this line came from https://stackoverflow.com/questions/2932754/ternary-operators-in-javascript-without-an-else
  }
  return endArr;
}

nonUniqueElements([1, 2, 3, 1, 3])



//---------------------------------------



/*
MEDIAN https://js.checkio.org/mission/median/
A median is a numerical value separating the upper half of a sorted array of numbers
from the lower half. In a list where there are an odd number of entities, the median
is the number found in the middle of the array. If the array contains an even number
of entities, then there is no single middle value, instead the median becomes the average
of the two numbers found in the middle. For this mission, you are given a
non-empty array of natural numbers (X). With it, you must separate the upper half
of the numbers from the lower half and find the median.

Input: An array as a list of integers.
Output: The median as a float or an integer.

Example:

median([1, 2, 3, 4, 5]) == 3
median([3, 1, 2, 5, 3]) == 3
median([1, 300, 2, 200, 1]) == 2
median([3, 6, 20, 99, 10, 15]) == 12.5
*/

function median(array) {
  array.sort((a, b) => { return a -b; });
  console.log(array);
  var endResult;
  array.length % 2 === 0 ? endResult = (array[(array.length / 2) - 1] + array[(array.length / 2)]) / 2 : endResult = array[Math.floor(array.length / 2)]

  return endResult;
}

//less elegant solution
function median(array) {
  array.sort((a, b) => { return a -b; });

  if (array.length % 2 === 0) {
    console.log("first if");
    console.log(array);
    while (array.length > 2) {
      array.pop();
      array.shift();
      console.log(array);
    }
    return (array[0] + array[1]) / 2;
  }
  else {
    while (array.length > 1) {
      array.pop();
      array.shift();
    }
    return array[0];
  }
}



/*
COUNT NEIGHBOURS https://js.checkio.org/mission/count-neighbours/
You are given a state for a rectangular board game grid with chips in a binary matrix,
where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates
for a cell in the form of row and column numbers (starting from 0).
You should determine how many chips are close to this cell.
Every cell interacts with its eight neighbours;
those cells that are horizontally, vertically, or diagonally adjacent.

example

For the given examples (see the schema) there is the same grid:

[[1, 0, 0, 1, 0],
 [0, 1, 0, 0, 0],
 [0, 0, 1, 0, 1],
 [1, 0, 0, 0, 0],
 [0, 0, 1, 0, 0]]

For the first example coordinates of the cell is (1, 2) and as we can see
from the schema this cell has 3 neighbour chips. For the second example coordinates is
(0, 0) and this cell contains a chip, but we count only neighbours and the answer is 1.

Input: Three arguments. A grid as a tuple of tuples with integers (1/0),
a row number and column number for a cell as integers.

Output: How many neighbouring cells have chips as an integer.


countNeighbours([[1, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 1], [1, 0, 0, 0, 0], [0, 0, 1, 0, 0]], 1, 2) == 3
countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 0, 0) == 1

*/
//solution from online
function countNeighbours(data, row, col){
    var s = 0, adj = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1]];
    for (let a of adj){
      let x = row + a[0], y = col + a[1];
      if (data[x] && data[x][y]) s++;
    }
    return s;
}




//working but incomplete?
function countNeighbours(array, lat, lon) {
  console.log("lat is ", lat, " and lon is ", lon);
  var counter = 0;
  var latLimit;
  var lonLimit;
  lat + 1 === array.length ? latLimit = lat : latLimit = lat + 1
  for (var i = lat - 1; i <= latLimit; i++) {
    console.log("i is: ", i);
    var arrayEl;
    if (i >= 0) {
      arrayEl = array[i]
    }
    else {
      continue;
    }
      // i >= 0 ? arrayEl = array[i] : continue;
      lon + 1 === arrayEl.length ? lonLimit = lon : lonLimit = lon + 1;
    for (var j = lon - 1; j <= lonLimit; j++) {
      console.log("j is ", j);
      if (arrayEl[j] === 1) {
        counter += 1;
      }
    }
  }
  return counter - array[lat][lon];
}


function countNeighbours(array, lat, lon) {
  console.log("lat is ", lat, " and lon is ", lon);
  //Set counter variable
  var counter = 0;


  //Set variables used in the for loops
  var latMinLimit, latMaxLimit, lonMinLimit, lonMaxLimit;

  //Set conditions for values of variables in parent loop

  lat - 1 < 0 ? latMinLimit = lat : latMinLimit = lat - 1;
  lat + 1 === array.length ? latMaxLimit= lat : latMaxLimit= lat + 1;


  for (var i = lat - 1; i <= latMaxLimit; i++) {
    console.log("i is: ", i);
    var arrayEl;
    if (i >= 0) {
      arrayEl = array[i]
    }
    else {
      continue;
    }
      lon + 1 === arrayEl.length ? lonMaxLimit = lon : lonMaxLimit = lon + 1;
    for (var j = lon - 1; j <= lonMaxLimit + 1; j++) {
      console.log("j is ", j);
      if (arrayEl[j] === 1) {
        counter += 1;
      }
    }
  }
  return counter - array[lat][lon];
}

countNeighbours([[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],5,4])


//working
function countNeighbours(array, lat, lon) {
  console.log("lat is ", lat, " and lon is ", lon);
  var counter = 0;
  var latLimit;
  var lonLimit;
  lat + 1 === array.length ? latLimit = lat : latLimit = lat + 1
  for (var i = lat - 1; i <= latLimit; i++) {
    console.log("i is: ", i);
    var arrayEl;
    if (i >= 0) {
      arrayEl = array[i]
    }
    else {
      continue;
    }
      // i >= 0 ? arrayEl = array[i] : continue;
      lon + 1 === arrayEl.length ? lonLimit = lon : lonLimit = lon + 1;
    for (var j = lon - 1; j <= lonLimit; j++) {
      console.log("j is ", j);
      if (arrayEl[j] === 1) {
        counter += 1;
      }
    }
  }
  return counter - array[lat][lon];
}


//-----------------------------------

function countNeighbours(array, lat, lon) {
  var counter = 0;
  for (var i = 0; i <= lat + 1; i++) {
    var arrayEl = array[i];
    for (var j = lon - 1; j <= lon + 1; j++) {
      if (arrayEl[j] === 1) {
        counter += 1;
      }
    }

  }
  return counter - array[lat][lon];
}


/* 20170719
WEAK POINT https://js.checkio.org/mission/weak-point/

While traveling, the spaceship endures quite a lot of stress. As a result,
an important part of the maintenance is to check the outer hull.
Stephan uses a digital durabilitimeter for this task. The device scans a portion
of the spaceships hull and gives a durability map that is divided by
small square fragments with measurements. Sometimes Stephan does not have much time
and he can patch only couple points, so we need an algorithm to find the weak points.

The durability map is represented as a matrix with digits. Each number is
the durability measurement for the cell. To find the weakest point we should
find the weakest row and column. The weakest point is placed in the intersection
of these rows and columns. Row (column) durability is a sum of cell durability
in that row (column). You should find coordinates of the weakest point (row and column).
The first row (column) is 0th row (column). If a section has several equal weak points,
then choose the top left point.


weakPoint([[7, 2, 7, 2, 8],
           [2, 9, 4, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]) == [3, 3]
weakPoint([[7, 2, 4, 2, 8],
           [2, 8, 1, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]) == [1, 2]

weakPoint([[1,2,3],[1,2,3],[1,2,3]])
*/


//Try as of 2017/07/27
//es6 style solution
function weakPoint(array) {
  let horizontalEval = array.map((horArr) => horArr.reduce((sum, addition) => sum += addition, 0));

  let verticalSumsArr = []
  array.map((arr, idx) => verticalSumsArr[idx] = 0);
  array.map((arr, idx) => arr.map((value, ind) => verticalSumsArr[ind] += value));

  return [
    horizontalEval.findIndex((element) => element === Math.min(...horizontalEval)),
    verticalSumsArr.findIndex((element) => element === Math.min(...verticalSumsArr))
  ]
}

//old school solution - 2017/07/27
function weakPoint(array) {
  var finalResult = [];
  var horizontalEval = array.map(function (horArr) {
    return horArr.reduce(function(sum, addition){
      return sum += addition;
    }, 0);
  });

  var verticalSumsArr = []

  array.map(function (arr, idx) {
    verticalSumsArr[idx] = 0;
  });

  array.map(function (arr, idx) {
    arr.map(function (value, ind) {
      verticalSumsArr[ind] += value;
    });
  });

  var horizontalMin = Math.min(...horizontalEval);
  var verticalMin = Math.min(...verticalSumsArr);


  finalResult.push(horizontalEval.findIndex(function (element) {
    return element === horizontalMin;
  }));
  finalResult.push(verticalSumsArr.findIndex(function (element) {
    return element === verticalMin;
  }));

  return finalResult;
}



//Solution from the internet
const calcCosts = matrix => matrix.map((row, index) => ({index, cost : row.reduce((a,b) => a + b)})).sort((a,b)=> a.cost - b.cost)[0];
const transoneMatrix = matrix => matrix.map((_, i) =>  matrix.map(e => e[i]));
function weakPoint(matrix){
    return [calcCosts(matrix).index, calcCosts(transoneMatrix(matrix)).index]
}

//And another from the internet
function weakPoint(matrix){

    let rowTotals = [], colTotals = [];
    let rowMin = 0, colMin = 0;
    rowTotals = matrix.map( function (row , rowIndex) {
                             rowIndex === 0 ? colTotals = row :
                                            row.map( function(val , colIndex ) {
                                                    colTotals[colIndex] += val;});
                             return row.reduce( (total , reading) => total += reading);
                          }) ;
    rowMin = Math.min(...rowTotals);
    colMin = Math.min(...colTotals);

    return [ rowTotals.findIndex(val => val===rowMin) ,
             colTotals.findIndex(val => val===colMin) ];
}

//My solution
  function weakPoint(array) {

    let rowsSumArr = [];
    let columnsSumObj = {};


    //Create array with the sum of the nested arrays elements (rows)
    for (let i = 0; i < array.length; i++) {
      let total = array[i].reduce(function(sum, value){
        return sum += value;
      }, 0)
      rowsSumArr.push(total);
      columnsSumObj[i] = 0;
    }

//Create object with the sum of all the array elements that their indices match
    for (let j = 0; j < array.length; j++) {
      let verticalElements = array[j];
      for (let k = 0; k < verticalElements.length; k++) {
        columnsSumObj[k] += verticalElements[k];
      }
    }


    let endArr = [
        {
          "position": 0,
          "value": +Infinity
        },
        {
          "position": 1,
          "value": +Infinity
        }
    ]

    for (let i = 0; i < rowsSumArr.length; i++) {
      if (endArr[0].value > rowsSumArr[i]) {
        endArr[0].position = i;
        endArr[0].value = rowsSumArr[i];
      }
    }

    for (var key in columnsSumObj) {
      if (endArr[1].value > columnsSumObj[key]) {
        endArr[1].position = Number(key);
        endArr[1].value = columnsSumObj[key];
      }
    }
    return [endArr[0].position, endArr[1].position]
  }

/*20170727
THE MOST WANTED LETTER - https://js.checkio.org/mission/most-wanted-letter/
You are given a text, which contains different english letters and punctuation symbols.
You should find the most frequent letter in the text.
The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter,
so for the purpose of your search, "A" == "a".
Make sure you do not count punctuation symbols,
digits and whitespaces, only letters.

If you have two or more letters with the same frequency,
then return the letter which comes first in the latin alphabet.
For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.

Example:

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"
*/

function mostWanted(string) {
  let str = string.toLowerCase();
  let evalObj = {};
  let finalLetter = "";
  let counter = -Infinity
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (let value of str) {
    alphabet.indexOf(value) !== -1 ? (evalObj[value] === undefined ? evalObj[value] = 1 : evalObj[value] += 1) : null;
  }
  console.log(evalObj);

  for (let key in evalObj) {
    evalObj[key] > counter ? (finalLetter = key, counter = evalObj[key]) : null;
    evalObj[key] === counter && alphabet.indexOf(finalLetter) > alphabet.indexOf(key) ? finalLetter = key : null;
  }
  return finalLetter;
}

/*20170729
ROMAN NUMERALS https://js.checkio.org/mission/roman-numerals/
Roman numerals come from the ancient Roman numbering system. They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values. The first ten Roman numerals are:

I, II, III, IV, V, VI, VII, VIII, IX, and X.

The Roman numeral system is decimal based but not directly positional and does not include a zero. Roman numerals are based on combinations of these seven symbols:

Numeral	Value
I	1 (unus)
V	5 (quinque)
X	10 (decem)
L	50 (quinquaginta)
C	100 (centum)
D	500 (quingenti)
M	1,000 (mille)
More additional information about roman numerals can be found on the Wikipedia article.

For this task, you should return a roman numeral using the specified integer value ranging from 1 to 3999.

Input: A number as an integer.

Output: The Roman numeral as a string.

Example:

romanNumerals(6) == 'VI'
romanNumerals(76) == 'LXXVI'
romanNumerals(13) == 'XIII'
romanNumerals(44) == 'XLIV'
romanNumerals(3999) == 'MMMCMXCIX'
1
2
3
4
5
How it is used: This is an educational task that allows you to explore different numbering systems. Since roman numerals are often used in the typography, it can alternatively be used for text generation. The year of construction on building faces and cornerstones is most often written by Roman numerals. These numerals have many other uses in the modern world and you read about it here... Or maybe you will have a customer from Ancient Rome ;-)

Precondition: 0 < number < 4000
*/

function romanNumerals(number) {
  var romanNumbersObj = {
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
    I: 1,
  }
  var finalRoman = "";

  while (number > 0) {
    for (var key in romanNumbersObj) {
      if (number >= romanNumbersObj[key]) {
        finalRoman += key;
        number = number - romanNumbersObj[key];
        break;
      }
    }
  }
  return finalRoman;
}

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

Addition: The results of your function will be shown as a list in the tests explanation panel.

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

function numberRadix(str, num) {
  return isNaN(parseInt(str, num)) ? -1 : parseInt(str, num);
}
/*
The following solution is working after I added the if statement based on the following paragraph from MDN:
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
