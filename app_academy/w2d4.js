// Read These Programs

var foo = 5;

function bar(){
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); //What is foo on this line? --> 5
console.log(bar()); //What is bar() on this line? --> Anthony (the variable returned is foo which equals to "Anthony")
console.log(foo); //What is foo on this line?  --> 5

//-------------------------------------------
var foo = 5;

function bar(foo){
  return foo + 65;
}

console.log(foo); //What is foo on this line? --> 5
console.log(bar(5)); //What is bar() on this line? --> 70?
console.log(foo); //What is foo on this line? --> 5
console.log(bar(5)); //What is bar() on this line? --> 70?

//-------------------------------------------

var foo = "Happy";

for(var foo = 0; foo <= 5; foo += 1){
  console.log(foo); //What will foo be on each iteration? --> 0,1,2,3,4,5
}

console.log(foo); //What will foo be on this line? --> 6 - Not happy because
//the var foo = 0 is not within a function so therefore not within a scope.

//------------------------------------

var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line? --> 1: 5

function foo(){
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line? --> 3: 10

  var innerFoo = function(){
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line? --> 4: 10 (not 15 bacause bar = 15 in innerFoo becomes global but
    //it does not affect the bar = 10 in function foo)
}

console.log("2: " + bar); //2: What will bar be on this line? --> 2: 15 - incorrect, it is 2:5 because the bar in
// irrerFoo was not called
foo();
console.log("5: " + bar); //5: What will bar be on this line? --> 5: 15 - incorrect, it is 5:5 because the bar in
// irrerFoo was not called

//-----------------------------------

var bar = "dance";

function foo(){
  bar = 10;

  var innerFoo = function(){
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line? --> 2: 10
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line? --> 3: 10
}

console.log("1: " + bar); //1: What will bar be on this line? --> 1: 10 (not dance because bar in the function foo does not have a var terminology)
foo(); //2: 10 3: 10
console.log("4: " + bar); //4: What will bar be on this line? --> 4: 10 (not dance because bar in the function foo does not have a var terminology)

/* Factorial
Write a function factorial(n), that returns the factorial of the number n. Example: factorial(4) => 4 * 3 * 2 * 1 => 24

> factorial(1)
1
> factorial(4)
24
> factorial(5)
120
> factorial(10)
3628800 */

function factorial(n) {
  var number = 1;
  for (var i = n; i >= 1; i--) {
    number *= i;
  }
  return number;
}


/* Long Word Count
Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

>longWordCount("")
0
>longWordCount("short words only")
0
>longWordCount("one reallylong word")
1
>longWordCount("two reallylong words inthisstring")
2
>longWordCount("allwordword longwordword wordswordword")
3
>longWordCount("seventy schfifty five")
1 */

function longWordCount(string) {
  var stringSplit = string.split(" ");
  var numberOfWordsLargerThanSevenCharacters = 0;
  //console.log("Check 1: The split words are: " + stringSplit);
  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > 7) {
      numberOfWordsLargerThanSevenCharacters += 1;
    }
  }
  return numberOfWordsLargerThanSevenCharacters;
}


/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs.

>lcm(2, 3)
6
>lcm(6, 10)
30
>lcm(24, 26)
312 */

function lcm(num1, num2) {
  if (num1 === 2 || num2 === 2) {
    return num1 * num2;
  } else if (num1 === 1 || num2 === 1) {
    return num1 * num2;
    } else if (num1 % 2 === 0) {
    return (num1 / 2) * num2;
  } else if (num2 % 2 === 0) {
    return (num2 / 2) * num1;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 * num2;
  }
}


function lcm(num1, num2) {
  if ((num1 === 2 || num2 === 2) || (num1 === 1 || num2 === 1)) return num1 * num2;

  if (num1 % 2 === 0) return (num1 / 2) * num2;

  if (num2 % 2 === 0) return (num2 / 2) * num1;

  if (num1 % 2 !== 0 && num2 % 2 !== 0) return num1 * num2;
}

//initial solution with var lowestMultiple that was not returned
function lcm(num1, num2) {
  var lowestMultiple;
  console.log("check: var lowestMultiple is: " + lowestMultiple)
  if (num1 === 2 || num2 === 2) {
    return num1 * num2;
    console.log("check 1: lowestMultiple is: " + lowestMultiple);
  } else if (num1 % 2 === 0) {
    console.log("check 2: num1 divided by 2 is: " + (num1 / 2));
    lowestMultiple = (num1 / 2) * num2;
    console.log("check 3: lowestMultiple is: " + lowestMultiple);
    return (num1 / 2) * num2;
  } else if (num2 % 2 === 0) {
    console.log("check 4: num2 divided by 2 is: " + (num2 / 2));
    lowestMultiple = (num2 / 2) * num1;
    console.log("check 5: lowestMultiple is: " + lowestMultiple);
    return (num2 / 2) * num1;
  }
  //return lowestMultiple; //This is not returned. Why?
}
/* Hipsterfy
Write a function hipsterfy(sentence) that takes takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel.

>hipsterfy("proper")
"propr"
>hipsterfy("proper tonic panther")
"propr tonc panthr"
>hipsterfy("towel flicker banana")
"towl flickr banan"
>hipsterfy("runner anaconda")
"runnr anacond"
>hipsterfy("turtle cheeseburger fries")
"turtl cheeseburgr fris" */

function hipsterfy(sentence) {
  var newWords = sentence.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  console.log("check 1: The split sentence is: " + newWords);
  for (var i = 0; i < newWords.length; i++) {
    console.log("check 2: The word that is being evaluated is: " + newWords[i]);
    for (var k = newWords[i].length - 1; k >= 0; k--) {
      console.log("check 3: The word that is evaluated within the second for loop is " + newWords[i]);
      console.log("check 4: The letter of the word that is being evaluated is: " + newWords[i][k] + ", i: " + i + ", k: " + k);
      for (var l = vowels.length - 1; l >= 0; l--) {
         console.log("check 5: vowel to be compared is: " + vowels[l]);
         var conjoinedWord = "";
         if (conjoinedWord !== 0) {
           console.log("The break should happen here");
         } else if (newWords[i][k] === vowels[l]) {
           var splitWord = newWords[i].slice(0,[k]);
           var splitWord2 = newWords[i].slice(k+1);
           console.log(splitWord + splitWord2);
           conjoinedWord = splitWord + splitWord2;
           console.log(conjoinedWord);
           }
      //     // continue;
      //     // console.log("check 6: continue needs to get here bacause letter of newWords[i][k] is: " + newWords[i][k] + " and vowel is: " + vowels[l]);
      //     // //console.log("check 7: removal needed here (split - join) bacause letter of newWords[i][k] is: " + newWords[i][k] + " and vowel is: " + vowels[l]);

      }
    }
  }
  return newWords;
}

hipsterfy("paraskevas apostolopoulos");
