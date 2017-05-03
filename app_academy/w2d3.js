// Debug These Programs
//Working

function unique(array){
  var uniqueArray = [];
//Working
  for(var i = 0; i < array.length; i += 1){
    console.log("chekpoint1: " + array[i]);
    var ele = array[i];
    if(uniqueArray.indexOf(ele) === -1){
      uniqueArray.push(ele);
    }
  }
  return uniqueArray;
}

unique([1,23,2,4,5,1,23]) //==> [1, 23, 2, 4, 5];

//------------------------------------------

function isHappy(person){
  if(person > 5){ // modified the person.happiness
    return true;
  }
  return false;
}

function isHappyGroup(group){
  var amount = 0;
  var person = group;
  for(var i = 0; i < group; i += 1){
    // console.log("The happy person value is: " + isHappy(person));
    if(isHappy(person) === true){
      // console.log("is happy person is true and being returned " + person);
      amount += 1;
      // console.log("This is the amount number added: " + amount);
    }
  }
  if(amount > 5){
    return true;
  }
  return false;
}

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

isHappyGroup(people) //==> true;

//-------------------------------------
//Working

var magicify = function(number) {
  return number - 34;
}

var isMagicNumber = function(number){
  var magicNumb = magicify(number);
  console.log("The number used was: " + number);
  console.log("magicify is:" + magicify(number));
  console.log("magicNumb is: " + magicNumb);
  if((magicNumb % 13 === 0) || (magicNumb < 0)){
    return true;
  }
  //console.log("Before the false")
  return false;
}

isMagicNumber(26) === true;
isMagicNumber(50) === false;


//--------------------------------
//Working

function howHigh(height){
  return (height + " feet high!");
}

function jump(height){
  return "I'm jumping " + howHigh(height);
}

jump(5) === "I'm jumping 5 feet high!";
jump(12) === "I'm jumping 12 feet high!";

//----------------------------------------
//Working

function fizzBuzz(max){
  var i = 1;
  var array = [];

  while(i < max){
    if(i % 5 === 0 || i % 3 === 0 && i !== 15){
      array.push(i);
    }
    i += 1;
  }

  return array;
}


//-----------------------------------


/* titleize
Write a function titleize(title, stopWords) that takes in a string title and and array of strings stopWords.
Return the title where every word that does not exist in the stopWords array is capitalized; all others lowercase.

Hints
Test after you write every function!
First write a function containsPunctuation(word) that takes in a single word and returns true if the word contains a punctuation mark.
Feel free to use the punctuation array we've given you below.

Second, write a function isStopWord(word, stopWords) that takes in a single word and returns true if it is a stop word.
The check will vary depending on if the word contains punctuation or not.
Using Array.prototype.indexOf will not work in all cases. See the third example.

Third, write the titleize function, using the functions you wrote before.

"hey"[0] returns a copy of h, not the original h, therefore:
var myStr = "hey"
myStr[0] = "w"
myStr === "hey", not "wey"
Remember Array.prototype.slice? If not, look at the documentation and play in the console.
var punctuation = [";", "!", ".", "?", ",", "-"];
>titleize("forest gump, the runner", ["the"])
"Forest Gump, the Runner"

>titleize("MASTER AND COMMANDER", ["and"])
"Master and Commander"

>titleize("i LOVE; lover of mine", ["love", "of"])
"I love; Lover of Mine"

>titleize("shall we dance?", ["dance"])
"Shall We dance?" */

function containsPunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  var splitWord = word.split("");
  for (var i = 0; i < splitWord.length; i++) {
    if (punctuation.indexOf(splitWord[i]) !== -1) {
      console.log("The character that is being checked is " + splitWord[i] + " in position: " + i)
      return true;
    }
  }
  return false;
  // First write a function containsPunctuation(word) that takes in a single word and returns
  // true if the word contains a punctuation mark.
  // Feel free to use the punctuation array we've given you below.
}

function isStopWord(word, stopWords){
  for(var i = 0; i < stopWords.length; i += 1){
    var stopWord = stopWords[i]; //define a var at the top of the for loop so it can change it's value everytime stopWords changes
    if(containsPunctuation(word) && //If the word contains a punctuation and
       word.indexOf(stopWord) === 0 && //The word and the stopWord are identical
       word.length === stopWord.length + 1){ //The length of the word is same to length of the stopword + 1 char. for the punctuation
      return true;
    } else if(word === stopWord){
      return true;
    }
  }

  return false;
}

titleize(title, stopWords){


}
// Write a function titleize(title, stopWords) that takes in a string title and and array of strings stopWords.
// Return the title where every word that does not exist in the stopWords array is capitalized; all others lowercase.

titleize("forest gump, the runner", ["the"])
"Forest Gump, the Runner"
