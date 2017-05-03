//FUNCTIONS

/* isOdd
Input: A Number.
Output: A Boolean. true if the number is odd, otherwise false

> isOdd(2)
false
> isOdd(5)
true
> isOdd(-17)
true */

function isOdd(number) {
  return number % 2 !== 0;
}

/* plusFive
Input: A Number.
Output: A Number. The sum of the input and 5.

> plusFive(0)
5
> plusFive(-2)
3
> plusFive(21)
26 */

function plusFive(number) {
  return number + 5;
}


/* threeOrSeven
Input: A Number.
Output: A Boolean. true if the number is divisible by 3 or 7

> threeOrSeven(3)
true
> threeOrSeven(42)
true
> threeOrSeven(49)
false
> threeOrSeven(8)
false */

//This one is incorrect

function threeOrSeven(number) {
  return ((number % 3 === 0) || (number % 7 === 0));
}


/* hello
Input: A String.
Output A String saying "Hello" to the input value.

> hello("child")
"Hello, child."
> hello("Anthony")
"Hello, Anthony."
> hello("fsfvf")
"Hello, fsfvf." */

function helloString(string) {
  return ("Hello, " + string + ".");
}

/*yell
Input: A String. Assume no punctuation.
Output: A String. A yelled version of the input.

> yell("I want to go to the store")
"I WANT TO GO TO THE STORE!!!"
> yell("Time to program")
"TIME TO PROGRAM!!!" */

function yell(scream) {
  return (scream.toUpperCase() + "!!!");
}

/* whisper
Input: A String. Assume no punctuation.
Output: A String. A whispered version of the input.

> whisper("Hey Anthony")
"...hey anthony..."
> whisper("YEA! that was fun")
"...yea! that was fun..." */

function whisper(string) {
  ("..." + string.toLowerCase() + "...")
}

/* isSubstring
Input
1) A String, called searchString.
2) A String, called subString.
Output: A Boolean. true is the subString is apart of the searchString.

> isSubstring("The cat went to the store", "he cat went")
true
> isSubstring("Time to program", "time")
true
> isSubstring("Jump for joy", "joys")
false */

function isSubstring(searchString, subString) {
  return (searchString.toLowerCase().indexOf(subString.toLowerCase())) >=0;
}
