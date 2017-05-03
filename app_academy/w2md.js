/* collisionDetected
A block is object that looks like this:
{
  x : 0,
  y : 0,
  width : 10,
  height : 10
}
Write a function collisionDetected(block1, block2) that returns true if block1 and block2 intersect, false otherwise.
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
collisionDetected(blockA, blockB) === true;
collisionDetected(blockA, blockC) === false;
collisionDetected(blockC, blockB) === true; */

function collisionDetected(block1, block2) {
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


  return true;
}

//Debug the Programs
function getPropsAndMethods(object){
  var propsAndMethods = { props : [], methods : [] };

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
    var speed = runner.runinngSpeed;

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
deepIndexOf

Write a function deepIndexOf(array, val) that takes a 2-dimensional array and val as its parameters. It returns an array containing the pairs of indices that represents the location of val in array. If the element does not exist, return [ [-1, -1] ].

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
Tic-Tac-Toe Project

Assume you have a 3 x 3 array:

[ [ , , ],
  [ , , ],
  [ , , ] ]
It represents a tic-tac-toe grid! Spaces filled by "-" represent empty spots and spaces can be filled by either "X" or "O" representing marked spots. For example,

 var grid1 = [
   ["-","X","O"],
   ["O","X","O"],
   ["-","X","-"] ];

 var grid2 = [
   ["-","X","O"],
   ["O","X","X"],
   ["X","O","O"] ];
/* Part 1

Write a function tttWon(grid) which takes a 3 x 3 grid array and returns true if there's a tic-tac-toe winner and false otherwise. You can assume that grid is a 2D array fully filled with single character "-", "X", and "O"'s. This program is a great time to practice decomposition (i.e. write helper functions). If you're not sure about how to play tic-tac-toe, click here.

> tttWon(grid1)
true

> tttWon(grid2)
false
If you get stuck, below are a few hints.

Hints:

Write tttHorizontal(grid) which takes grid and returns true if there's three in a row and false otherwise.
Write tttVertical(grid) which takes grid and returns true if there's three in a column and false otherwise.
Write tttDiagonal(grid) which takes grid and returns true if there's three in a diagonal and false otherwise.
Part 2

Write a function tttWinner(grid) so that it returns the mark of the winner if there is a winner or "no winner!" otherwise. You have the majority of the logic for this already; you just wrote it! Modify your tttWon(grid) and your helper functions to solve for the winner.

> tttWinner(grid1)
"X"

> tttWinner(grid2)
"no winner!" */

Part 1 here

/*Part 2

Write a function tttWinner(grid) so that it returns the mark of the winner if there is a winner or "no winner!" otherwise.
You have the majority of the logic for this already; you just wrote it! Modify your tttWon(grid) and your helper functions to solve for the winner.

> tttWinner(grid1)
"X"

> tttWinner(grid2)
"no winner!" */

Part 2 here
