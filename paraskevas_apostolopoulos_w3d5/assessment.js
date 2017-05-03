/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/

function myForEach(arr, cb) {
  arr.forEach(function(ele, idx, arr){
    cb(ele, idx, arr)
  });
}

myForEach([5,12,-3], function(ele, i, arr){
  console.log(ele + " is at position " + i + " in array " + arr);
})
// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value

/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
//Paris: Not quite sure what you are asking here



// mySelect([5,12,-22,-3], function(ele, i, arr){
// return ele % 2 === 0;
// });
//[13, -22] //return value

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:
1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray
2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"
!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel
Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay
> inPigLatin("let us Dance")
etlay usyay Anceday
> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/



// inPigLatin("let us Dance"); //etlay usyay Anceday

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  mySelect : mySelect,
  myForEach : myForEach,
  inPigLatin : inPigLatin
};
