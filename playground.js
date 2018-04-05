function addTwoFewTimes(num, counter) {
  while (counter > 0) {
    num += 2
    counter -= 1
  }
  return num;
}


function addTwoFewTimes(num, counter){
  num += 2
  counter -= 1
  if (counter === 0) {
    return num;
  }
  addTwoFewTimes(num, counter);
}


function hipsterfy(sentence){
    //create new variable and split the string:
    var arraySentence = sentence.split(" ");
//create new variable and use .map() method:
    var newSentence = arraySentence.map(function(word){
        var result = "";
        console.log(word)
        console.log(word.length);

        var vowels = 'aeiou';
        for(var i = word.length - 1; i >= 0; i--){
            console.log("i", i);
            console.log(vowels.indexOf(word[i]));
            if(vowels.indexOf(word[i]) !== -1){
                console.log("in the if for " + i + " " + word[i]);
                return word.replace("a", "");
                // break;
            }
        }
        // return word;
    })
    return newSentence;
}
hipsterfy("runner anaconda");
