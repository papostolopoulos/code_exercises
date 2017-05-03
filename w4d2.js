/* Pokemon Part 1
Let's practice creating a JavaScript class.

Phase 1
Create a new file called pokemon.js.
Create a Pokemon class.
Give it the instance variables: name, type, level, and hp.
The constructor should take as arguments:

a string argument for name
a string argument for type
an integer argument for level (optional)
A pokemon's hp is 2.25 times its level, but because this must be a whole number, we'll round the result down.
If no argument for level is passed in, a pokemon's level is set to 5.

> var pikachu = new Pokemon('PIKACHU', 'Electric', 10);
> var bulbasaur = new Pokemon('bulbasaur', 'leaf', 11);
> var onyx = new Pokemon('onyx', 'rock');

> pikachu;
{ name: 'PIKACHU', type: 'Electric', level: 10, hp: 22 }
> bulbasaur;
{ name: 'BULBASAUR', type: 'Leaf', level: 11, hp: 24 }
> onyx;
{ name: 'ONYX', type: 'Rock', level: 5, hp: 11 }
NB: A pokemon's name is uppercased and type is capitalized.

Phase 2

Let's add some methods to our Pokemon class! Write methods:

Pokemon#levelUp: should increase a pokemon's level by 1 and return the Pokemon. Don't forget to recalcuate its hp.
Pokemon#faint: should return true if a pokemon's hp is less than or equal to 0, false otherwise.
Pokemon#revive: should reset a pokemon's hp and return the Pokemon.
Pokemon#call: should return a pokemon's "nickname", repeated twice.

A pokemon's nickname comes from taking its name up to the second vowel.
If there are no second vowels, its nickname is its full name. Hint: a variable VOWELS might be helpful with this.
> pikachu.hp -= 5; // Pikachu got attacked!

> pikachu.faint()
false

> pikachu.revive()
{ name: 'PIKACHU', type: 'Electric', level: 10, hp: 22 }

> pikachu.levelUp()
{ name: 'PIKACHU', type: 'Electric', level: 11, hp: 24 }

> pikachu.call()
"PIKA-PIKA"

> bulbasaur.call()
"BULBA-BULBA"

> onyx.call()
"ONYX-ONYX"
Phase 3

Change your constructor so you can pass in an array of moves
(i.e. Pokemon(name, type, moves, level)).
moves is an array of all possible moves for a type of pokemon, ordered from weakest to strongest.
A move has a name and damage key ({name: nameOfAttack, damage: 3}),
var electricTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Thunder Shock", damage: 4 },
  { name: "Charge Beam", damage: 5 },
  { name: "Thunder Wave", damage: 5 },
  { name: "Spark", damage: 7 },
  { name: "Thunder Punch", damage: 8 },
  { name: "Shock Wave", damage: 10 },
  { name: "Thunder Bolt", damage: 15  },
  { name: "Thunder", damage: 20 },
  { name: "Zap Cannon", damage: 30 },
  { name: "Electric Beam", damage: 35}
];

var leafTypeMoves = [
  { name: "Absorb", damage: 2 },
  { name: "Tackle", damage: 3 },
  { name: "Bullet Seed", damage: 4 },
  { name: "Mega Drain", damage: 6 },
  { name: "Vine Whip", damage: 8 },
  { name: "Razor Leaf", damage: 15 },
  { name: "Giga Drain", damage: 18  },
  { name: "Seed Bomb", damage: 22 },
  { name: "Petal Dance", damage: 25 },
  { name: "Solar Beam", damage: 35}
];

var rockTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Rollout", damage: 6 },
  { name: "Rock Blast", damage: 4 },
  { name: "Smack Down", damage: 10 },
  { name: "Rock Throw", damage: 20 },
  { name: "Rock Slide", damage: 30 },
  { name: "Head Smash", damage: 40 },
  { name: "Rock Wrecker", damage: 50 }
];

pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
onyx = new Pokemon('onyx', 'rock', rockTypeMoves);
NB: level is still an optional argument.

A pokemon only has access to a fraction of its moves depending on its level.
The percentage of moves it has access to is equal to the fraction of its level to its max level, which is 50 for all pokemon.
Thus, when a pokemon level ups enough, it gains access to new moves.

Write a method Pokemon#availableMoves that returns a list of available moves.
Divide a pokemon's level by the Max Level of any pokemon: 50;
The resulting fraction is the proportion of your moves you have access to
A pokemon, regardless of its level, will always have access to its first move
See the example below
> pikachu.moves // 11 total moves
[ { name: 'Tackle', damage: 3 },
  { name: 'Thunder Shock', damage: 4 },
  { name: 'Charge Beam', damage: 5 },
  { name: 'Thunder Wave', damage: 5 },
  { name: 'Spark', damage: 7 },
  { name: 'Thunder Punch', damage: 8 },
  { name: 'Shock Wave', damage: 9 },
  { name: 'Thunder Bolt', damage: 10 },
  { name: 'Thunder', damage: 12 },
  { name: 'Zap Cannon', damage: 20 },
  { name: 'Electric Beam', damage: 20 } ]

> pikachu.level / 50; // fraction of level to max level
0.2

> pikachu.availableMoves(); // returns first 20% of its total moves
[ { name: 'Tackle', damage: 3 }, { name: 'Thunder Shock', damage: 4 } ]


> bulbasaua.availableMoves();
[ { name: 'Absorb', damage: 2 }, { name: 'Tackle', damage: 3 } ]
NB: The order of availableMoves mirrors the order of allMoves.

Don't forget that a pokemon can't have 0 moves! At a minimum, it always has its first possible move.
Change #availableMoves to fix this.

> onyx.availableMoves();
[ { name: 'Tackle', damage: 3 } ]
Next let's use these moves! Write a Pokemon#attack(opponent, moveName) method. This method should take:

a Pokemon argument for opponent
a string argument moveName that should correspond to an available move's name (optional)
The opponent pokemon's hp should reflect the damage of the move.
If no available move is found that matches or no move is passed in, attack with a pokemon's strongest available attack.
An attack message and stats output would probably be nice. Use Array.prototype.forEach().

> pikachu.attack(bulbasaur, "Thunder Shock");
PIKACHU attacked with Thunder Shock!
Damage to BULBASAUR: -4
PIKACHU hp: 24
BULBASAUR hp: 20

> pikachu.attack(onyx);
PIKACHU attacked with Thunder Shock!
Damage to ONYX: -4
PIKACHU hp: 24
ONYX hp: 7
Congrats you now have a Pokemon class!

Bonus

Hmmm is there a way to store a pokemon's available moves instead of calculating for them every attack? Change your Pokemon class to fix this. */
