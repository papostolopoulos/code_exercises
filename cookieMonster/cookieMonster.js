/*## Cookie Monster Project
For this project, we are going to make a `cookieMonster` object.
  * Type `mocha` in the command prompt/terminal to see all the failing tests. Your job will be to make them all pass.

* Look at the first failing test.
It is expecting `cookieMonster` to have a property called `name` that evaluates to `Fred`.
In `cookieMonster.js`, add the property `name` and set it to `Fred`.
  * Run `mocha` again. Yay! The spec has passed.

* Now fix all the "initial properties" specs.

* We are going to create two methods `#eat(food)` and `#isAlrightMeal(food)`:
  * `#eat(food)`: returns a score (integer). `food` is an array of of string
  food items. Every food item that is a favorite food add +2 to the score; good
  foods add +1; bad foods add -1; hated foods add -2. Make sure the spec passes.
  * `#isAlrightMeal(food)`: return `true` if the `food` score is within between 1 and -1.*/

var cookieMonster = {
  name : "Fred",
  hair: "blue",
  favoriteFoods: ["cookies"],
  goodFoods: ["pizza", "skittles"],
  badFoods: ["water", "banana"],
  hatedFoods: ["spinach"],
  eat : function(food) {
    var score = 0;
    for (var i = 0; i < food.length; i++) {
      if (this.favoriteFoods.indexOf(food[i]) !== -1) {
        score += 2;
      }
      else if (this.goodFoods.indexOf(food[i]) !== -1) {
        score += 1;
      }
      else if (this.badFoods.indexOf(food[i]) !== -1) {
        score -= 1;
      }
      else if (this.hatedFoods.indexOf(food[i]) !== -1) {
        score -= 2;
      }
    }
    return score;
  },
  isAlrightMeal : function(food) {
    if (this.eat(food) >= -1 && this.eat(food) <= 1) {
      return true;
    }
    else {
      return false;
    }
  }
};

/********/
module.exports = cookieMonster; // Don't touch this line
