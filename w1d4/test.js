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

    it('cookieMonster.favorite_foods === ["cookies"]', function () {
      assert.deepEqual(cookieMonster.favorite_foods, ["cookies"]);
    });

    it('cookieMonster.good_foods === ["pizza", "skittles"]', function () {
      assert.deepEqual(cookieMonster.good_foods, ["pizza", "skittles"]);
    });

    it('cookieMonster.bad_foods === ["water", "banana"]', function () {
      assert.deepEqual(cookieMonster.bad_foods, ["water", "banana"]);
    });

    it('cookieMonster.hated_foods === ["spinach"]', function () {
      assert.deepEqual(cookieMonster.hated_foods, ["spinach"]);
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
