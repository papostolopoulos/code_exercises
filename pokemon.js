function Pokemon(name, type, level, hp) {
  this.name = name.toUpperCase();
  this.type = type.slice(0,1).toUpperCase() + type.slice(1);
  if(level === undefined) {
      this.level = 5;
  }
  else {
    this.level = level;
  };
  this.hp = Math.floor(this.level * 2.25);
}

var pikachu = new Pokemon('PIKACHU', 'Electric', 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', 11);
var onyx = new Pokemon('onyx', 'rock');

//Pokemon#levelUp: should increase a pokemon's level by 1 and return the Pokemon. Don't forget to recalcuate its hp.
Pokemon.prototype.levelUp = function() {
  this.level += 1;
  return(this);
}

//Pokemon#faint: should return true if a pokemon's hp is less than or equal to 0, false otherwise.
Pokemon.prototype.faint = function() {
  if (this.hp <= 0) {
    return true;
  }
  else {
    return false;
  }
}

//Pokemon#revive: should reset a pokemon's hp and return the Pokemon.
Pokemon.prototype.revive = function() {
  this.hp = Math.floor(this.level * 2.25);
  return(this);
}

//Pokemon#call: should return a pokemon's "nickname", repeated twice.
Pokemon.prototype.call = function() {
  var pokemonNickname = this.name;
  var vowels = ["A", "E", "I", "O", "U"];
  var countVowels = 0;
  for (var i = 0; i < pokemonNickname.length; i++) {
    for (var k = 0; k < vowels.length; k++) {
      if (pokemonNickname[i] === vowels[k]) {
        countVowels += 1;
        if (countVowels === 2) {
          pokemonNickname = pokemonNickname.slice(0,(i + 1));
          break;
        }
      }
    }
  }
  return(pokemonNickname + "-" + pokemonNickname);
}

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

function Pokemon(name, type, moves, level) {
  this.name = name.toUpperCase();
  this.type = type.slice(0,1).toUpperCase() + type.slice(1);
  if(level === undefined) {
      this.level = 5;
  }
  else {
    this.level = level;
  };
  this.hp = Math.floor(this.level * 2.25);
  this.moves = moves;
}

pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
onyx = new Pokemon('onyx', 'rock', rockTypeMoves);

Pokemon.prototype.availableMoves = function() {
  var availMoves = [];
  var maxLevel = 50;
  var pctOfLevel = this.level / maxLevel;
  var movesStretch = Math.floor(this.moves.length * pctOfLevel);
  if (movesStretch === 0) {
    movesStretch = 1;
  }
    for (var i = 0; i < movesStretch; i++) {
      availMoves.push(this.moves[i]);
    }
  return availMoves;
}

/* Next let's use these moves! Write a Pokemon#attack(opponent, moveName) method. This method should take:

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
Congrats you now have a Pokemon class! */

Pokemon.prototype.attack = function(opponent, moveName) {
  opponent = opponent.ttoString;
  moveName = moveName || this.availableMoves()[this.availableMoves().length-1].name;
  console.log(this.name + " attacked with " + moveName + "!");
  console.log("Damage to " + opponent + ": " + (-this.availableMoves()[this.availableMoves().length-1].damage));
}

this.name.availableMoves()[this.name.availableMoves().length-1];

Pokemon.prototype.attack = function(opponent, moveName) {
  if (moveName === undefined) {
    moveName ===
  }
  else {
    this.name.availableMoves()[this.name.availableMoves().length-1];
  }
  console.log(this.name + " attacked with " + moveName)
}






























function Cat(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
}

Cat.prototype.meow = function() {
  console.log(this.name + " says meow.");
}

var cat1 = new Cat("Kitty", 2, "red");
var cat2 = new Cat("Whiskers", 7, "black");
var cat3 = new Cat("Whitney", 11, "gray");

cat1.meow(); // logs "Kitty says meow."
cat2.meow(); // logs "Whiskers says meow."
cat3.meow(); // logs "Whitney says meow."
