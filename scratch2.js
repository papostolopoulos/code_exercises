// ~~~~~~ 1
var students1 = [
  { name : "Anthony" },
  { name : "Winne" },
  { name : "Arjun" }
];


var printNames = function (students1) {
  students1.forEach(function(ele, idx, arr) {
    console.log(ele["name"]);
    });
}

//Write a function that will print the name of all the students
// Use Array#forEach
//Example
// printNames(students1)
// Anthony
// Winnie
// Arjun

// ~~~~~~ 2
var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winne",
    id : 1
  }, {
    name : "Arjun",
    id : 2
  }
];

var printStudents = function(students2) {
  students2.forEach(function(ele, idx, arr) {
    console.log(ele.name + " is student " + ele.id);
  });
}

//Write a function that will print the name and id of all the stuents
// Use Array#forEach
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Arjun is student #2


//~~~~~3
var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winne",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Arjun",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

var printBestGrade = function(students3) {
  students3.forEach(function(student, idx, arr) {
    var highestScore = student["grades"][idx]["score"];
    student["grades"].forEach(function(grade, i, ar) {
      if (highestScore < student["grades"][i]["score"]) {
        highestScore = student["grades"][i]["score"];
      }
    });
    console.log(student.name + " " + highestScore);
  });
}



//Write a function that will print the name of the student and their highest test score
// Use Array#forEach
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Arjun 92

var printAverageGrade = function(students3) {
  students3.forEach(function(student, idx, arr) {
    var scoreSum = 0;
    student["grades"].forEach(function(grade, i, ar) {
      scoreSum += student["grades"][i]["score"];
    });
    var averageScore = scoreSum / student["grades"].length;
    console.log(student.name + " " + averageScore);
  });
}


//Write a function that will print the name of the student and their highest test score
// Use Array#forEach
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winne 72.66666666666667
// Arjun 73.33333333333333

var printBestStudent = function(students3) {
  students3.forEach(function(ele, idx, arr) {

  });
}

students3[0]["grades"][0]["score"]
//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest score
// Use Array#forEach
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Arjun
// Test 2: Winnie


//CLASSES
var Person = function(name, superpower) {
  this.name = name;
  this.superpower = superpower;
}

Person.prototype.introduceMyself = function() {
  console.log("Hello, I am " + this.name + " and I have the power to " + this.superpower);
}
