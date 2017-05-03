## Cookie Monster Project

* For this project, we are going to make a `cookieMonster` object.
  * Type `mocha` in the command prompt/terminal to see all the failing tests. Your job will be to make them all pass.

* Look at the first failing test. It is expecting `cookieMonster` to have a property called `name` that evaluates to `Fred`. In `cookieMonster.js`, add the property `name` and set it to `Fred`.
  * Run `mocha` again. Yay! The spec has passed.

* Now fix all the "initial properties" specs.

* We are going to create two methods `#eat(food)` and `#isAlrightMeal(food)`:
  * `#eat(food)`: returns a score (integer). `food` is an array of of string
  food items. Every food item that is a favorite food add +2 to the score; good
  foods add +1; bad foods add -1; hated foods add -2. Make sure the spec passes.
  * `#isAlrightMeal(food)`: return `true` if the `food` score is within between 1 and -1.
