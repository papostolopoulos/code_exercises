var assert = require('assert');
var cookieMonster = require('../cookieMonster.js');

describe('Cookie Monster', function() {

  describe('initial properties:', function () {
    it('cookieMonster.name === "Fred"', function () {
      assert.equal(cookieMonster.name, "Fred");
    });

    it('cookieMonster.hair === "blue"', function () {
      assert.equal(cookieMonster.hair, "blue");
    });

    it('cookieMonster.favoriteFoods === ["cookies"]', function () {
      assert.deepEqual(cookieMonster.favoriteFoods, ["cookies"]);
    });

    it('cookieMonster.goodFoods === ["pizza", "skittles"]', function () {
      assert.deepEqual(cookieMonster.goodFoods, ["pizza", "skittles"]);
    });

    it('cookieMonster.badFoods === ["water", "banana"]', function () {
      assert.deepEqual(cookieMonster.badFoods, ["water", "banana"]);
    });

    it('cookieMonster.hatedFoods === ["spinach"]', function () {
      assert.deepEqual(cookieMonster.hatedFoods, ["spinach"]);
    });
  });

  describe('#eat(food)', function () {
    it('should return proper health ranking for favorite foods', function () {
      var food = ["cookies", "fries"]
      var score = cookieMonster.eat(food);
      assert.equal(score, 2);
    });

    it('should return proper health ranking for good foods', function () {
      var food = ["pizza", "fries"]
      var score = cookieMonster.eat(food);
      assert.equal(score, 1);
    });

    it('should return proper health ranking for bad foods', function () {
      var food = ["water", "fries"]
      var score = cookieMonster.eat(food);
      assert.equal(score, -1);
    });

    it('should return proper health ranking for hated foods', function () {
      var food = ["spinach", "fries"]
      var score = cookieMonster.eat(food);
      assert.equal(score, -2);
    });

    it('should return proper health ranking for variety meal', function () {
      var food = ["spinach", "cookies", "fries", "cookies", "water", "cookies", "pizza", "coffee"]
      var score = cookieMonster.eat(food);
      assert.equal(score, 4);
    });

  });

  describe('#isAlrightMeal(food)', function () {
    it('should return true if the meal is alright (has a score of 0+-1)', function () {
      var food = ["fries"]
      assert.equal(cookieMonster.isAlrightMeal(food), true);
      food.push("cookies")
      assert.equal(cookieMonster.isAlrightMeal(food), false);
      food.push("water")
      assert.equal(cookieMonster.isAlrightMeal(food), true);
      food.push("water")
      assert.equal(cookieMonster.isAlrightMeal(food), true);
      food.push("water")
      assert.equal(cookieMonster.isAlrightMeal(food), true);
      food.push("water")
      assert.equal(cookieMonster.isAlrightMeal(food), false);
    });
  });

});
