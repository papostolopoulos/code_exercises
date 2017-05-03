//ARRAYS

var puppies = ["chup", "chuk", "chunk"];
var i = 0;
while (i < puppies.length) {
  console.log("Hello " + puppies[i]);
  i += 1;
}

var userInfo = ["Paraskevas", "Apostolopoulos", "823 Kansas Street", "San Francisco", "CA 94107"];

userInfo.indexOf("Apostolopoulos")

//-------------------------------
/* logEach
Write a function logEach(array) that prints every element of the array and it's index to the console.
Example:

> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson */

function logEach(array) {
  for (var i = 0; i < array.length; i +=1) {
    console.log(i + ": " + array[i]);
  }
}

/* maxValue
Write a function maxValue(array) that returns the largest value in the array.
Assume array is an array of numbers.

> maxValue([43, 12, 6, 2])
43
> maxValue([])
null
> maxValue([-4, -10, 0.43])
0.43 */

function maxValue(array) {
   if (array.length === 0) {
     return null;
   }
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}









function maxValue(array) {
  if (array.length === 0) {
    return null;
  } //If statement in case the array does not have any length and therefore needs to return null
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

/* printRange
Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead.
Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */

function printRange(start, end) {
  if (start > end) {
      console.log("Bad range");
  }
  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}

/* Functions
isPrime
Write a function isPrime(number) that returns a boolean indicating if number is prime or not.
Assume number is a positive integer.

> isPrime(2)
true
>isPrime(1693)
true
> isPrime(15)
false
> isPrime(303212)
false */

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


function isPrime(number) {
  //Put and if statement to check if number === 2. Then return true
  if (number === 2) {
    return true;
  }
  // Itterate starting from 2 and check if the number is divisible by 0.
  // If it is, return false
  for(i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


/* firstNPrimes
Using isPrime, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */

function firstNPrimes(n) {
  var primes = [];
  for (var i = 2; n > primes.length; i++) {
    if (isPrime(i) === true) {
    primes.push(i);
    }

  }
  return primes;
}


//Solution from Git
function firstNPrimes(n){
  var primes = [];
  var num = 2;
  while(primes.length < n){
    if(isPrime(num)){
      primes.push(num);
    }
    num += 1;
  }
  return primes;
}


/* sumOfNPrimes
Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */


function sumOfNPrimes(n) {
  var sum;
  var primes = firstNPrimes(n);
  for (var i = 0; i < primes.length; i++) {
      sum += primes[i];
  }
  return sum;
}
