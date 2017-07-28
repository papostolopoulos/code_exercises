/*
Non-unique Elements
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
MEDIAN
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
COUNT NEIGHBOURS
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
WEAK POINT

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
  let counter = - Infinity
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (let value of str) {
    alphabet.indexOf(value) === -1 || evalObj[value] === undefined ? evalObj[value] = 1 : evalObj[value] += 1
  }

  for (let key in evalObj) {
    evalObj[key] > counter ? (finalLetter = key, counter = evalObj[key]) : null;
  }
  return finalLetter;
}
