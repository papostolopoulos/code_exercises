/*20170810
THE HUMMING DISTANCE https://js.checkio.org/mission/hamming-distance/
The Hamming distance between two binary integers is the number of bit positions
that differs (read more about the Hamming distance on Wikipedia). For example:

    117 = 0 1 1 1 0 1 0 1
     17 = 0 0 0 1 0 0 0 1
      H = 0+1+1+0+0+1+0+0 = 3

You are given two positive numbers (N, M) in decimal form.
You should calculate the Hamming distance between these two numbers in binary form.

Input: Two arguments as integers.

Output: The Hamming distance as an integer.

Example:

hammingDistance(117, 17) == 3
hammingDistance(1, 2) == 2
hammingDistance(16, 15) == 5

*/
function returnBinary(num){
  var result = [];
  while(num > 0) {
    result.unshift(num % 2);
    num = Math.floor(num/2);
  }
  return result;
}

function hammingDistance(num1, num2) {
  let result = 0;
  const largeNum = num1 > num2 ?  num1 : num2;
  const smallNum = num1 > num2 ? num2 : num1;
  const binaryLarge = returnBinary(largeNum);
  const binarySmall = returnBinary(smallNum);
  const lengthDiff = binaryLarge.length - binarySmall.length;
  for (let i = 0; i < lengthDiff; i++) {
    binarySmall.unshift(0);
  }
  console.log(binaryLarge);
  console.log(binarySmall);
  for (let j = 0; j < binaryLarge.length; j++) {
    if(binaryLarge[j] !== binarySmall[j]) result += 1;
  }
  return result;
}

// online solution
// based on the bitwise operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
function hammingDistance([n, m]){
    return ((n ^ m).toString(2).replace(/0/g,'').length);
}

/*The XOR ( exclusive-OR ) gate acts in the same way as the logical "either/or."
The output is "true" if either, but not both, of the inputs are "true."
The output is "false" if both inputs are "false" or if both inputs are "true."
Another way of looking at this circuit is to observe that the output is 1
if the inputs are different, but 0 if the inputs are the same.
http://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR
*/

/*20170815
BRACKETS https://js.checkio.org/mission/brackets/
You are given an expression with numbers, brackets and operators. For this task only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]". Brackets are used to determine scope or to restrict some expression. If a bracket is open, then it must be closed with a closing bracket of the same type. The scope of a bracket must not intersected by another bracket. In this task you should make a decision, whether to correct an expression or not based on the brackets. Do not worry about operators and operands.

Input: An expression with different of types brackets as a string (unicode).

Output: A verdict on the correctness of the expression in boolean (True or False).

Example:

brackets("((5+3)*2+1)") == true
brackets("{[(3+1)+2]+}") == true
brackets("(3+{1-1)}") == false
brackets("[1+1]+(2*2)-{3/3}") == true
brackets("(({[(((1)-2)+3)-3]/3}-3)") == false
brackets("2+3") == True

//USE REPLACE TO REMOVE NUMBERS AND ARITHMETIC SYMBOLS
COMPARE FIRST AND LAST CHARACTER OF STRING AND SEE IF LENGTH IS 0
OR you might want to compare with Regex the first character of the string before
the arithmetic charater and if the closing brace is matching
*/

function brackets(str) {
  str = str.replace(/[0-9+-/*]/g, '')
  for (var i = 0; i < str.length; i++) {
    if ((str[i] === "[" && str[i + 1] === "]") || (str[i] === "(" && str[i + 1] === ")") || (str[i] === "{" && str[i + 1] === "}")) (str = str.replace(str[i]+str[i + 1], ''), i = -1);
  }
  return str.length === 0;
}

function brackets(str) {
  let numbersSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*'];
  for (let i = 0; i < str.length; i++) {
    if (numbersSymbols.indexOf(str[i]) !== -1) {
      str = str.replace(str[i], '');
      //str.split('').splice(i, 1).join(); - Alternative to .replace()
      i--;
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "[" && str[i + 1] === "]") {
      str = str.replace(str[i]+str[i + 1], '');
      i = -1;
    }
    if (str[i] === "(" && str[i + 1] === ")") {
      str = str.replace(str[i]+str[i + 1], '');
      i = -1;
    }
    if (str[i] === "{" && str[i + 1] === "}") {
      str = str.replace(str[i]+str[i + 1], '');
      i = -1;
    }
  }
  return str.length === 0;
}

//solution from the internet
function brackets(expression){
    let exp = expression.replace(/\d|[+\-*/]/g, ''),
        prev = '';

    while ( exp.length !== prev.length ) {
           prev = exp;
           exp = exp.replace('()', '')
                    .replace('{}', '')
                    .replace('[]', '');
    }

    return exp.length === 0;
}

/* 20170817
POWER SUPPLY https://js.checkio.org/mission/power-supply/
Several power plants in this area exploded last night. We don’t know why yet.
Our engineering team is still trying to figure it out.
I think it was some kind of a bug.
I told them not to release anything only 5 minutes before leaving for the day.

Anyway…

For emergencies, we have a couple of mobile power stations.
Help us to figure out which cities blacked out so we can send them there as soon as possible.

Fortunately, we still have the original plan of the electricity grid and already
removed the blown up power plants from it.
The updated plan now shows the remaining power plants,
their supply range as well as their connections to the power grid.
This should be enough for you to figure out which cities are not getting power.

You are given the power grid and power-plant's information (plant-number and supply-range).
You should find out which cities blacked out.
A power plant can supply itself and connected cities with power, but the range is limited.



Input: Two arguments. The first one is the network, represented as a list of connections.
Each connection is a list of two nodes that are connected.
A city or power plant can be a node. Each city or power plant is a unique string.
The second argument is a dict where keys are power plants and values are the power plant's range.

Output: A list of strings Each string is the name of a blacked out city.

Example:

​
powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1}) == ['с2']
powerSupply([['c0', 'c1'], ['c1', 'p1'], ['c1', 'c3'], ['p1', 'c4']], {'p1': 1}) == ['c0', 'c3']
powerSupply([['p1', 'c1'], ['c1', 'c2'], ['c2', 'c3']], {'p1': 3}) == []
*/

If the city is directly connected to the plant, then it becomes a plant.
If the city - plant is not connected to another city, then it is removed by New obj.
If number of keys is equal to the value of initial plant,
then all other cities are not connected so they need to be added in the end array.
Otherwise:
The new city plants become the actual plants and the process starts over with the value of the
city - plant as the plant value minus one?

powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1}) == ['с2']
powerSupply([['c0', 'c1'], ['c1', 'p1'], ['c1', 'c3'], ['p1', 'c4']], {'p1': 1}) == ['c0', 'c3']
powerSupply([['p1', 'c1'], ['c1', 'c2'], ['c2', 'c3']], {'p1': 3}) == []
powerSupply([['c0', 'c1'], ['c1', 'p1'], ['c1', 'c3'], ['p1', 'c4']], {'p1': 1}) == ['c0', 'c3']
powerSupply([["c0","p1"],["p1","c2"]],{"p1":0}) == ['c0', 'c2']
powerSupply([["p0","c1"],["p0","c2"],["c2","c3"],["c3","p4"],["p4","c5"]],{"p0":1,"p4":1}) == []
powerSupply([["p0","c1"],["p0","c2"],["p0","c3"],["p0","c4"],["c4","c9"],["c4","c10"],["c10","c11"],["c11","p12"],["c2","c5"],["c2","c6"],["c5","c7"],["c5","p8"]],{"p0":1,"p12":4,"p8":1}) == ['c6', 'c7']

function powerSupply(networkArr, plantObj) {
  let result = [];
  while (Object.keys(plantObj).length > 0) {
    let testObj = {plant: -1}, testPlant = ""
    for (let key in plantObj) {
      if (testObj.plant < plantObj[key]) testObj.plant = plantObj[key], testPlant = key;
    }
    console.log('testObj.plant', testObj.plant);
    console.log("testPlant:", testPlant);

    for (let i = 0; i < networkArr.length; i++) {
      let nodeEl = networkArr[i];
      if (testPlant === nodeEl[0] && plantObj[nodeEl[1]] === undefined && plantObj[testPlant]  > 0) plantObj[nodeEl[1]] = plantObj[testPlant] - 1;
      if (testPlant === nodeEl[1] && plantObj[nodeEl[1]] === undefined && plantObj[testPlant]  > 0) plantObj[nodeEl[0]] = plantObj[testPlant] - 1;
      if (testPlant === nodeEl[0] && plantObj[testPlant]  === 0) result.push(nodeEl[1]);
      if (testPlant === nodeEl[1] && plantObj[testPlant]  === 0) result.push(nodeEl[0]);
    }

    delete plantObj[testPlant];
    console.log(plantObj);
  }

  return result;
}



function powerSupply(networkArr, plantObj) {
  let result = [];
  let newPlants = {};
  let newNetwork = [];

  console.log('##########################');
  console.log("starting loop");

  for (let i = 0; i < networkArr.length; i++) { //
    let nodeEl = networkArr[i] //["p0","c1"]

    /*
    1. If element is member of object
      - Create new property in newPlants with value = the current property minus 1
      1a. If other element is not included in result
        - Push the other element of the array in result
([["p0","c1"],["p0","c2"],["p0","c3"],["p0","c4"],["c4","c9"],["c4","c10"],["c10","c11"],["c11","p12"],["c2","c5"],["c2","c6"],["c5","c7"],["c5","p8"]],{"p0":1,"p12":4,"p8":1})
{c1: }
    */
    if (plantObj.hasOwnProperty(nodeEl[0])) { //true - p0
      newPlants[nodeEl[1]] = plantObj[nodeEl[0]] - 1; //{c1: 0, c2: 0, c3: 0, c4: 0, c11: 3: c5:0}
      result.push(nodeEl[1]); //[c1, c2, c3, c4, c4, c9, c4, c10, c10, c11, c11, c2, c5, c2, c6, c5, c7, c5]
                //newPlants:
      // if (!result.includes(nodeEl[1])) result.push(nodeEl[1]);
    }
    if (plantObj.hasOwnProperty(nodeEl[1])) { //false
      newPlants[nodeEl[0]] = plantObj[nodeEl[1]] - 1;
      result.push(nodeEl[0]);
      // if (!result.includes(nodeEl[0])) result.push(nodeEl[0]);
    }

    /*
    // 2. If element is member of object and other element element is included in result
    // - DO NOTHING (This was changed to do something either way)
    */

    /*
    3. if both elements are not members of object
      3a. If first element is not included in result but second is
        - Push first element in result
      3b. If second element is not included in result but first is
        - Push second element in result
      3c. if both elements are not included in result
        - Push both elements in result
      3d. If both elements are included in result
        - Do nothing
    */
    if (!plantObj.hasOwnProperty(nodeEl[0]) && !plantObj.hasOwnProperty(nodeEl[1])) {
      result.push(nodeEl[0], nodeEl[1]);
      newNetwork.push(nodeEl);
      // if (!result.includes(nodeEl[0]) && result.includes(nodeEl[1])) result.push(nodeEl[0]), newNetwork.push(nodeEl);
      // if (result.includes(nodeEl[0]) && !result.includes(nodeEl[1])) result.push(nodeEl[1]), newNetwork.push(nodeEl);
      // if (!result.includes(nodeEl[0]) && !result.includes(nodeEl[1])) result.push(nodeEl[0], nodeEl[1]), newNetwork.push(nodeEl);
    }
  }

  console.log('plantObj', plantObj);
  console.log('newPlants', newPlants);
  console.log('networkArr', networkArr);
  console.log('result', result);
  console.log('----------------------------------');
  console.log('----------------------------------');

/*
1. Iterate over the object. If the values are -1 then delete the properties
*/
for (let key in newPlants) {
  if (newPlants[key] === -1) delete newPlants[key]
}

/*
2. If the object still has properties, then recursively run the function
else return the result
*/

return Object.keys(newPlants).length === 0 ? result : powerSupply(newNetwork, newPlants);

}









function powerSupply(networkArr, plantObj) {
  console.log('##########################');
  console.log("starting loop");
  let newPlants = {};
  let result = [];
  let newNetwork = [];

  for (let i = 0; i < networkArr.length; i++) {
    /*
    1. If element is member of object and element is larger than 0
    2. If element is member of object and element is zero
    3. if element is not member of object
    */
    if (!plantObj.hasOwnProperty(networkArr[i][0]) && !result.includes(networkArr[i][0])) result.push(networkArr[i][0]);
    if (!plantObj.hasOwnProperty(networkArr[i][1]) && !result.includes(networkArr[i][1])) result.push(networkArr[i][1]);
    if (plantObj.hasOwnProperty(networkArr[i][0]) && plantObj[networkArr[i][0]] > 0) newPlants[networkArr[i][1]] = plantObj[networkArr[i][0]] - 1;
    if (plantObj.hasOwnProperty(networkArr[i][1]) && plantObj[networkArr[i][1]] > 0) newPlants[networkArr[i][0]] = plantObj[networkArr[i][1]] - 1;
    if (!plantObj.hasOwnProperty(networkArr[i][0]) && !plantObj.hasOwnProperty(networkArr[i][1])) newNetwork.push(networkArr[i])
  }

  console.log('plantObj', plantObj);
  console.log('newPlants', newPlants);
  console.log('networkArr', networkArr);
  console.log('result', result);
  console.log();

  for (let i = 0; i < result.length; i++) {
    if (newPlants.hasOwnProperty(result[i])) result.splice(i, 1), i--
  }
  console.log('result after for', result);
  console.log('------------------------------');
  console.log('------------------------------');
  // for (let key in plantObj) {
  //   if (plantObj[key] !== 0) return powerSupply(newNetwork, newPlants);
  // }
  // return result;
  return plantObj[Object.keys(plantObj)[0]] === 0 ? result : powerSupply(newNetwork, newPlants);

}
