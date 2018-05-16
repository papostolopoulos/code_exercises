/*20180511
PEARLS IN THE BOX https://js.checkio.org/en/mission/box-probability/

To start the game, they put several black and white pearls in one of the boxes.
Each robots have Nth moves, then initial set are restored for a next player.
For each move, the robot take a pearl out of the box and put one of the
opposite color back. The winner is the one who pulls the white pearl on the
Nth step (or +1 point if they play many parties).

Our robots don't like indeterminacy and want to know the probability
of a white pearl on the Nth step. The probability is a value between 0
(0% chance or will not happen) and 1 (100% chance or will happen).
The result is a float from 0 to 1 with two digits precision (±0.01).

You are given a start set of pearls as a string that contains "b"
(black) and "w" (white) and the number of the step (N).
The order of the pearls does not matter.

probability
Input: The start sequence of the pearls as a string and the step number as an integer.
Output: The probability for a white pearl as a float.

Example:
boxProbability('bbw', 3) == 0.48
boxProbability('wwb', 3) == 0.52
boxProbability('www', 3) == 0.56
boxProbability('bbbb', 1) == 0
boxProbability('wwbb', 4) == 0.5
boxProbability('bwbwbwb', 5) == 0.48
*/

// function boxProbability(str, moves) {
//   var chances = {
//     string: "wbb",
//     tries: 3,
//     probability: 1,
//     // whiteChance: 1,
//     // blackChance: 1,
//     nodes: [],
//     iterate: function() {
//       if (this.tries > 0) {
//         if (this.string.includes("w")) {
//           if (this.string.match(/w/g).length > 0) {
//             var newObj = {
//               probability: (this.probability*this.string.match(/w/g).length)/ this.string.length,
//               // whiteChance: (this.whiteChance*this.string.match(/w/g).length)/ this.string.length,
//               // blackChance: this.blackChance,
//               string: this.string.replace(/w/, "b"),
//               tries: this.tries - 1,
//               nodes: [],
//               iterate: this.iterate
//             }
//             this.nodes.push(newObj);
//             newObj.iterate();
//             // this.nodes[this.nodes.length - 1].iterate();
//           }
//         }
//
//         if (this.string.includes("b")) {
//           if (this.string.match(/b/g).length > 0) {
//             var newObj = {
//               probability: (this.probability*this.string.match(/b/g).length)/ this.string.length,
//               // blackChance: (this.blackChance*this.string.match(/b/g).length)/ this.string.length,
//               // whiteChance: this.whiteChance,
//               string: this.string.replace(/b/, "w"),
//               tries: this.tries - 1,
//               nodes: [],
//               iterate: this.iterate
//             }
//             this.nodes.push(newObj);
//             newObj.iterate();
//             // this.nodes[this.nodes.length - 1].iterate();
//           }
//         }
//       }
//     }
//   };
//
// }

// If the tries are === 1 then do only a white ball pull, not a white and a black ball pull

function boxProbability(str, moves) {
  var chances = {
    string: str,
    movesLeft: moves,
    probability: 1,
    nodes: [],
    iterate: function() {
      if (this.movesLeft > 0 && this.string.includes("w")) {
        var newObj = {
          probability: (this.probability*this.string.match(/w/g).length)/ this.string.length,
          string: this.string.replace(/w/, "b"),
          movesLeft: this.movesLeft - 1,
          nodes: [],
          iterate: this.iterate
        }
        this.nodes.push(newObj);
        newObj.iterate();
      }

      if (this.movesLeft > 1 && this.string.includes("b")) {
          var newObj = {
            probability: (this.probability*this.string.match(/b/g).length)/ this.string.length,
            string: this.string.replace(/b/, "w"),
            movesLeft: this.movesLeft - 1,
            nodes: [],
            iterate: this.iterate
          }
          this.nodes.push(newObj);
          newObj.iterate();
      }
    },
    findProbability: function(){
      var finalProbability = 0;
      this.iterate();
      var moves = this.moves;
      for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].nodes.length > 0) {
          this.nodes.push(...this.nodes[i].nodes);
          if (this.nodes[i].movesLeft > 0) {
            this.nodes.splice(i, 1);
            i--;
          }
        }
        else {
          console.log(this.nodes[i].probability);
          finalProbability += this.nodes[i].probability;
        }
      }
      console.log(this.nodes);
      return finalProbability.toFixed(2);
    }
  };
  return chances.findProbability();

}

var arr = [{one: 1}, {two: 2}, {three: 3}];
var arr2 = [[{four: 4}, {five: 5}], [{six: 6}, {seven: 7}]];

boxProbability('bbw', 3) // == 0.48
boxProbability('wwb', 3) // == 0.52 (not working 0.74)
boxProbability('www', 3) // == 0.56
boxProbability('bbbb', 1) // == 0
boxProbability('wwbb', 4) // == 0.5
boxProbability('bwbwbwb', 5) // == 0.48
