//LOOPS

/* Truth Tables
x	    y	    z	      x && y || z	    x && (y || z)
true	true	false
true	false	false
false	true	false
false	false	false
x	    y	    z	      x || y && z	   x || (y && z)
true	true	false
true	false	false
false	true	false
false	false	false */

console.log("You need to do the above exersise")

/* logBetween
Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
Inclusive means that the the range that will be printed will include the lowNum and highNum.
> logBetween(-1, 2)
-1
0
1
2
>logBetween(14, 6)
// nothing gets printed
> logBetween(4,6)
4
5
6 */

//While method:
function logBetween(lowNum, highNum) {
  while(lowNum <= highNum) {
    console.log(lowNum);
    lowNum += 1;
  }
}

//for method:
function logBetween(lowNum, highNum) {
  for (var i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints to the console every number from 0 to max
that is divisible by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18 */

function fizzBuzz(max) {
  for (var i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}






//This is incorrect

function fizzBuzz(max) {
  for (var i = 0; i < max; i += 1) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log(i);
    }
    else if ((i % 3 !== 0) && (i % 5 === 0)) {
      console.log(i);
    }
  }
}

//Solution from Git
function fizzBuzz(max) {
  for(var i = 0; i < max; i += 1) {

    if(i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if(i % 5 === 0 && i % 3 !== 0){
      console.log(i);
    }

  }
}

/*What will these evaluate to?

function func1(num) {
  return num + 50;
}

function func2(num) {
  return num + " bottles of beer on the wall";
}

function func3(num) {
  var x = func1(num);
  return func2(x);
}

func3(5);
It evaluates to "55 bottles of beer on the wall"
This is happening because:
- func1 takes the num and ads 50
- func2 takes the num and adds it to the sentence: " bottles of beer on the wall"
- func3 takes the num and defines func1(num) as x. So num+x from func1
--Then it returns the var x as an argument for func2 so in essence func2(x) (or func2(num+50))


//-------------
var foo = function(name) {
  return "Dance " + name + ", dance! "
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

bar();
-It returns "Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! |" three times */



//---------------------
/* isFactorOf
Define a function isFactorOf(number, factor) that returns true if factor is a factor of number.
Otherwise, false.
> isFactorOf(6,2)
true
> isFactorOf(-6, 2)
true
> isFactorOf(5,0)
false */

function isFactorOf(number,factor) {
  if (number % factor !== 0) {
    return false;
  }
  return true;
}


/* isPrime

Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.

> isPrime(2)
true
> isPrime(10)
false
> isPrime(15485863)
true
> isPrime(3548563)
false */

function isPrime(number) {
  if (number === 2) {
    return true;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

//Debug The Program

function sayHiNTimes(n) {
  var i = 0;
  while (i < n) {
    console.log("Hi");
  }
//SOLUTION: Missing the addition of i
function sayHiNTimes(n) {
  var i = 0;
  while (i < n) {
    console.log("Hi");
    i += 1; //Here!
  }
}

//Debug the program
function isFive(n) {
  if (n = 5) {
    return true;
  } else {
    return false;
  }
}

//SOLUTION: Get rid of the else statement, declare if value is not true, return false,
//otherwise the function is accurate so return true.
function isFive(n) {
  if (n != 5) {
    return false;
  }
  return true;
}
