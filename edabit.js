/*Create a function that takes a string and returns a string in which each character is repeated once.
Examples
"String" => "SSttrriinngg"
"Hello World!" => "HHeelllloo  WWoorrlldd!!"
"1234!_ " => "11223344!!__  "
Gotchas
No gotchas. All test cases contain valid strings. Don't worry about spaces, special characters or numbers.
All are considered valid characters.*/

function doubleChar(str) {
  var endStr = '';
  for (var i = 0; i < str.length; i++) {
    endStr += str[i] + str[i];
  }
  return endStr;
}






/*Create a function that takes an array of numbers and returns a new array,
sorted in ascending order (smallest to biggest).
Rules
Sort numbers array in ascending order.
If functions argument is null, an empty array or undefined, return an empty array.
Return new array of sorted numbers.
Examples
[1, 2, 10, 50, 5] => [1, 2, 5, 10, 50]
[80, 29, 4, -95, -24, 85] => [-95, -24, 4, 29, 80, 85]
null => []
[] => []
Gotchas
The numbers being passed to sortNumsAscending() can be positive or negative.*/

function sortNumsAscending(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  if (arr.length === 0) {
    return [];
  }

  arr.sort((a, b) => {
    return a-b;
  });
  return arr;
}

//SOLUTION AFTER GOING OVER THE COERSION EXPLANATION AT "JAVASCRIPT UNDERSTANDING THE WEIRD PARTS"
//Needed to puth Array.isArray(arr) as the first argument of the if statement otherwise I get
//a type error since "null" does not have a .length property
function sortNumsAscending(arr) {
  if (Array.isArray(arr) === false || arr.length === 0) {
    return [];
  }

  arr.sort((a, b) => {
    return a-b;
  });
  return arr;
}







/*Your job is to create a function that accepts a string as its only argument.
The function will return true if the email is valid and false if it's not. Super simple.
Rules
The string must contain an " @ " character.
The string must contain a " . " character.
The "@" character must have a minimum of one character in front of it.
e@edabit.com is valid while @edabit.com is invalid.
The " . " and the "@" must be in the appropriate places.
hello.email@com is invalid while john.smith@email.com is valid.
If the string passes these tests, it will be considered a valid email.
Examples
'@gmail.com' => false
'hello.gmail@com' => false
'gmail' => false
'hello@gmail' => false
'hello@edabit.com' => true
'' => false (an empty string)
Email validation can get more complicated than what we're going for here,
but this challenge will satisfy 95% of use cases. If you're unsure of something,
check out the lab tests to understand exactly what's being evaluated.*/

function validateEmail(str) {
  if (str.length === 0) {
    return false;
  }

  var atSplit = str.split("@");
  console.log(atSplit);
  if (atSplit.length !== 2 || atSplit[0] === '') {
    return false;
  }

  var dotSplit = atSplit[1].split(".");
  if (dotSplit.length !== 2) {
    return false;
  }

  return true;
}
