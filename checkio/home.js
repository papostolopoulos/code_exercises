/*Non-unique Elements
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
//working but incomplete
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
