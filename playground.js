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

function boxProbability(str, moves) {
  var chances = {
    string: "wbb",
    tries: 3,
    probability: 1,
    whiteChance: 1,
    blackChance: 1,
    movesLeft: 3,
    nodes: [],
    iterate: function() {
      if (this.tries > 1) {
        if (this.string.includes("w")) {
          if (this.string.match(/w/g).length > 0) {
            var newObj = {
              probability: (this.probability*this.string.match(/w/g).length)/ this.string.length,
              whiteChance: (this.whiteChance*this.string.match(/w/g).length)/ this.string.length,
              blackChance: this.blackChance,
              string: this.string.replace(/w/, "b"),
              tries: this.tries - 1,
              nodes: [],
              iterate: this.iterate
            }
            this.nodes.push(newObj);
            newObj.iterate();
          }
        }


      }
      console.log(newObj);
    }
  };

}


boxProbability('bbw', 3) // == 0.48
boxProbability('wwb', 3) // == 0.52
boxProbability('www', 3) // == 0.56
boxProbability('bbbb', 1) // == 0
boxProbability('wwbb', 4) // == 0.5
boxProbability('bwbwbwb', 5) // == 0.48
