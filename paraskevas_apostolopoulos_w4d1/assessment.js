/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

DO NOT USE THE BUILT IN ARRAY#FOREACH METHOD

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i],i,arr);
  }
}

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier.

Examples:
> myMap([1, 2, 3], function(ele, i, arr){
..  return ele * i;
..})
[0, 2, 6] //return value
> myMap([1, 2, 3], function(ele, i, arr){
..  return ("This element is " + ele);
..})
["This element is 1", "This element is 2", "This element is 3"] //return value
******************************************************************************/

function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i],i,arr);
  }
}

function myMap (arr, cb) {
  var mappedArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(myForEach) {
      mappedArray.push(cb(arr[i],i,arr));
    }
  }
    return mappedArray;
}

/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
> var students = [
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

> passingStudents(students)
[ 'Kush', 'Ned' ] //return value
******************************************************************************/
function passingStudents(array) {
  goodStudents = [];
  for (var i = 0; i < array.length; i++) {
    if (scoreSum > 70) {
      goodStudents.push(students[i].name)
    }
  }
  return goodStudents;
}

function scoreSum(students.grades) {
  var gradesSum;
  for (var i = 0; i < grades.length; i++) {
    var gradesSum += grades[i].score;
  }
  return gradesSum;
}

//Solution from Winnie
function passingStudents(array){
  var results = [];
  array.forEach(function(student){
    console.log(student);
    var sum = 0;
    student.grades.forEach(function(grade) {
      sum += grade.score;
    });
  })

  var average = sum / student.grades.length;

  if (average >=70) {
    results.push(students.name);
  }
    
  return results;
}


/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/
function laligatSequence(base, n){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myMap : myMap,
  myForEach : myForEach,
  passingStudents: passingStudents,
  laligatSequence : laligatSequence
};
