var assert = require('assert');

var myForEach = require('../assessment.js').myForEach,
    myMap = require('../assessment.js').myMap,
    passingStudents = require("../assessment.js").passingStudents,
    laligatSequence = require('../assessment.js').laligatSequence;

describe('#myForEach()', function () {
  var elements = [1,2,3];

  it('should pass the callback each element', function () {
    var expected = [1,2,3];
    var test = [];

    myForEach(elements, function(ele){
      test.push(ele);
    });

    assert.deepEqual(test, expected);
  });

  it('should pass the callback each index', function () {
    var expected = [0,1,2];
    var test = [];

    myForEach(elements, function(ele, i){
      test.push(i);
    });

    assert.deepEqual(test, expected);
  });

  it('should pass the callback the array', function () {
    var expected = [[1,2,3],[1,2,3],[1,2,3]];
    var test = [];

    myForEach(elements, function(ele,i,arr){
      test.push(arr);
    });

    assert.deepEqual(test, expected);
  });
});

describe('#myMap()', function () {
  it('should return array of all elements passed to the callback', function () {
    var expected = ["This element is 1", "This element is 2", "This element is 3"];
    var result = myMap([1, 2, 3], function(ele, i, arr){
      return ("This element is " + ele);
    });

    assert.deepEqual(result, expected);
  });

  it('should pass in the index and the array to the callback', function () {
    var expected = [0, 2, 6];
    var result = myMap([1, 2, 3], function(ele, i, arr){
      return ele * i;
    });

    assert.deepEqual(result, expected);
  });
});

describe('#passingStudents()', function() {
  it('should return an array of the names of all the passing students', function() {
    var students = [
      {
        "name": "Kush",
        "id": 12345,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
      },
      {
        "name": "Ned",
        "id": 55555,
        "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
      },
      {
        "name": "Haseeb",
        "id": 94110,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
      }];
    var expected = ["Kush", "Ned"];
    var result = passingStudents(students);
    assert.deepEqual(result, expected);
  })
})

describe('#laligatSequence()', function () {
  it('should return the laligat sequence starting with base and of length n.', function () {
    var result = laligatSequence(10, 4);
    var expected = [ 10, 17, 58, 381 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 2);
    expected = [ 5, 10 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 0);
    expected = [];
    assert.deepEqual(result, expected);
  });
});
