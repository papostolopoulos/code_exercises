/* Clock
For this mini-project, you will create a clock that ticks every second, displaying the current time.
READ ALL OF THE INSTRUCTIONS FIRST! Ask questions if you don't understand something.

Create a clock object;
Give it a property totalSeconds that starts at 0; */

/* Write a method getSeconds that will return the second count of our clock.
It should return a value from 00 to 59, just like a normal clock.
hint: Think about this is terms of totalSeconds. If totalSeconds equals 10, then this method should return "10".
If totalSeconds is 61 (01:01), this method should return "01".
hint: Play with the modulus operator. If I modulo x by i (x % i), will the result ever be greater than i?
hint: If the value is less than 9, you may have to append a 0 to the beginning

Test you getSeconds method.
Open node and manually set the totalSeconds and make sure getSeconds is giving you the right value. Test cases below:
If clock.totalSeconds = 0, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 9, clock.getSeconds() will evaluate to "09"
If clock.totalSeconds = 13, clock.getSeconds() will evaluate to "13"
If clock.totalSeconds = 60, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 1342, clock.getSeconds() will evaluate to "22" */

//---Solution Only with seconds
var clock = {
  totalSeconds : 0,
  getSeconds : function() {
    setInterval(function() {
      if (clock["totalSeconds"] === 0) {
        console.log("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] <= 9 && clock["totalSeconds"] >= 1) {
        console.log("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        console.log(clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] === 60) {
        console.log("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60) {
        clock["totalSeconds"] = clock["totalSeconds"] % 60;
        if (clock["totalSeconds"] === 0) {
          console.log("0" + clock["totalSeconds"]);
        }
        else if (clock["totalSeconds"] <= 9 && clock["totalSeconds"] >= 1) {
          console.log("0" + clock["totalSeconds"]);
        }
        else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
          console.log(clock["totalSeconds"]);
        }
      }
      clock["totalSeconds"] +=1;
    }, 1000);
  }
}

//solution without changing the value of totalSeconds
var clock = {
  totalSeconds : 0,
  getSeconds : function() {
    setInterval(function() {
      if (clock["totalSeconds"] === 0) {
        console.log("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] <= 9 && clock["totalSeconds"] >= 1) {
        console.log("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        console.log(clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] === 60) {
        console.log("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60) {
        if (clock["totalSeconds"] % 60 === 0) {
          console.log("0" + clock["totalSeconds"]);
        }
        else if (clock["totalSeconds"] % 60 <= 9 && clock["totalSeconds"] % 60 >= 1) {
          console.log("0" + (clock["totalSeconds"] % 60));
        }
        else if (clock["totalSeconds"] % 60 > 9 && clock["totalSeconds"] % 60 < 60) {
          console.log(clock["totalSeconds"] % 60);
        }
      }
      clock["totalSeconds"] +=1;
    }, 1000);
  }
}

clock.getSeconds();

/* Write a method getMinutes that will return the minute count of our clock.
It should return a value from 00 to 59, just like a normal clock.

hint: Write this in terms of totalSeconds, not the result of getSeconds?
Can you determine why? Think about it and if you're having trouble, call over the instructor.
hint: This will involve a few mathematical operations. How many minutes is 120 seconds? 2 minutes.
What math do we intuitively use to determine that?
hint: How many minutes are in 135 seconds? Still only 2 minutes.
The remainder exists as the second count. You may have to use some Math (hint hint) for cases like this.

Test your getMinutes method:

If clock.totalSeconds = 0, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 40, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 60, clock.getMinutes() will evaluate to "01"
If clock.totalSeconds = 134, clock.getMinutes() will evaluate to "02"
If clock.totalSeconds = 4342, clock.getMinutes() will evaluate to "12" */

var clock = {
  totalSeconds : 0,

  getMinutes : function() {
    setInterval(function() {
      if (clock["totalSeconds"] >= 0 && clock["totalSeconds"] < 10) {
        console.log("0" + Math.floor(clock["totalSeconds"]/10));
        // console.log(clock["totalSeconds"] + "control"); //Control
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        console.log("0" + Math.floor(clock["totalSeconds"]/100));
        // console.log(clock["totalSeconds"] + "control"); //Control
      }
      else if (clock["totalSeconds"] === 60) {
        // clock["totalSeconds"] = 0;
        console.log("0" + (clock["totalSeconds"]/clock["totalSeconds"]));
        console.log(clock["totalSeconds"] + "control"); //Control
      }
      else if (clock["totalSeconds"] > 60 && clock["totalSeconds"] < 600) {
        // clock["totalSeconds"] = Math.floor(clock["totalSeconds"] / 60);
        console.log("0" + Math.floor(clock["totalSeconds"] / 60));
      }
      else if (clock["totalSeconds"] > 600 && clock["totalSeconds"] < 3600) {
        console.log(Math.floor(clock["totalSeconds"]/60));
      }
      else if (clock["totalSeconds"] > 3600 && clock["totalSeconds"] < 86400) {
        console.log(Math.floor((clock["totalSeconds"] / 60)) / 6);
      }
      clock["totalSeconds"] +=1;
    }, 1000); // End of setInterval method
  } //End of getMinutes function
} //end of clock

clock.getMinutes();

/* Write a method getHours that will return minute count of our clock.
It can return any value from 00 to being arbitrarily high (i.e 72)

Test getHours:
If clock.totalSeconds = 0, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 200, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 4342, clock.getHours() will evaluate to "01"
If clock.totalSeconds = 20000, clock.getHours() will evaluate to "05"
If clock.totalSeconds = 900000, clock.getHours() will evaluate to "250" */

var clock = {
  totalSeconds : 0,

  getHours : function() {
    setInterval(function() {
      if (clock["totalSeconds"] < 3600) {
        console.log("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
        console.log(clock["totalSeconds"] + "control"); //Control
      }
      else if (clock["totalSeconds"] > 3600) {
        console.log(Math.floor((clock["totalSeconds"] / 3600)));
      }
      clock["totalSeconds"] +=1;
    }, 1000); // End of setInterval method
  } //end of getHours method
}

clock.getHours();

/*
Write a method printTime that logs the time in clock format.
Use getHours, getMinutes, and getSeconds
You will need to do some concatenation

If clock.totalSeconds = 0, clock.printTime() will log "00:00:00"
If clock.totalSeconds = 200, clock.printTime() will log "00:03:20"
If clock.totalSeconds = 3871, clock.printTime() will log "01:04:31" */

var clock = {
  totalSeconds : 0,
  getSeconds : function() {
    // setInterval(function() {
      // console.log(this.totalSeconds);
      // this["totalSeconds"] +=1;
      if (clock["totalSeconds"] === 0) {
        return ("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] <= 9 && clock["totalSeconds"] >= 1) {
        return ("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return (clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] === 60) {
        return ("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60) {
        if (clock["totalSeconds"] % 60 === 0) {
          return ("0" + (clock["totalSeconds"]-clock["totalSeconds"]));
        }
        else if (clock["totalSeconds"] % 60 <= 9 && clock["totalSeconds"] % 60 >= 1) {
          return ("0" + (clock["totalSeconds"] % 60));
        }
        else if (clock["totalSeconds"] % 60 > 9 && clock["totalSeconds"] % 60 < 60) {
          return (clock["totalSeconds"] % 60);
        }
      }
    // }.bind(this), 1000);
  }, //End of getSeconds function

  getMinutes : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] >= 0 && clock["totalSeconds"] < 10) {
        return("0" + Math.floor(clock["totalSeconds"]/10));
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return("0" + Math.floor(clock["totalSeconds"]/100));
      }
      else if (clock["totalSeconds"] === 60) {
        return("0" + (clock["totalSeconds"]/clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60 && clock["totalSeconds"] < 600) {
        return("0" + Math.floor(clock["totalSeconds"] / 60));
      }
      else if (clock["totalSeconds"] > 600 && clock["totalSeconds"] < 3600) {
        return(Math.floor(clock["totalSeconds"]/60));
      }
      else if (clock["totalSeconds"] > 3600 && clock["totalSeconds"] < 86400) {
        return(Math.floor((clock["totalSeconds"] / 60)) / 6);
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //End of getMinutes function

  getHours : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] < 3600) {
        return("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 3600) {
        return(Math.floor((clock["totalSeconds"] / 3600)));
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //end of getHours method

  printTime : function() {
    setInterval(function() {
      // console.log(this);
      // console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
      console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
      clock["totalSeconds"] +=1;
    }.bind(clock), 1000);
  } //End of printTime method

} //End of clock object


clock.printTime();

/* Write a method tick(startSecond). What this method should do is outlined below:
If startSecond was passed in (we'll make it optional), set totalSeconds to be equal to it.
Increment totalSeconds.
Print the current time to the console.
Using either setTimeout or setInterval, make this behavior repeat itself every second.
Remember, arguments in Javascript are optional, so no need to worry about constantly setting the startSecond parameter.

Test is out. When you're done, you'll have a clock that prints out a new time every second!
Bonus: Try writing tick using both setTimeout and setInterval! I called my methods intervalTick and timeoutTick. */

//This one not working. clock.tick starts from 00 and not from the expected seconds

//-------This one is not perfect------------------
var clock = {
  totalSeconds : 0,
  getSeconds : function() {
    // setInterval(function() {
      // console.log(this.totalSeconds);
      // this["totalSeconds"] +=1;
      if (clock["totalSeconds"] === 0) {
        return ("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] <= 9 && clock["totalSeconds"] >= 1) {
        return ("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return (clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] === 60) {
        return ("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60) {
        if (clock["totalSeconds"] % 60 === 0) {
          return ("0" + (clock["totalSeconds"]-clock["totalSeconds"]));
        }
        else if (clock["totalSeconds"] % 60 <= 9 && clock["totalSeconds"] % 60 >= 1) {
          return ("0" + (clock["totalSeconds"] % 60));
        }
        else if (clock["totalSeconds"] % 60 > 9 && clock["totalSeconds"] % 60 < 60) {
          return (clock["totalSeconds"] % 60);
        }
      }
    // }.bind(this), 1000);
  }, //End of getSeconds function

  getMinutes : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] >= 0 && clock["totalSeconds"] < 10) {
        return("0" + Math.floor(clock["totalSeconds"]/10));
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return("0" + Math.floor(clock["totalSeconds"]/100));
      }
      else if (clock["totalSeconds"] === 60) {
        return("0" + (clock["totalSeconds"]/clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60 && clock["totalSeconds"] < 600) {
        return("0" + Math.floor(clock["totalSeconds"] / 60));
      }
      else if (clock["totalSeconds"] > 600 && clock["totalSeconds"] < 3600) {
        return(Math.floor(clock["totalSeconds"]/60));
      }
      else if (clock["totalSeconds"] > 3600 && clock["totalSeconds"] < 86400) {
        return(Math.floor((clock["totalSeconds"] / 60)) / 6);
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //End of getMinutes function

  getHours : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] < 3600) {
        return("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 3600) {
        return(Math.floor((clock["totalSeconds"] / 3600)));
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //end of getHours method

  printTime : function() {
    setInterval(function() {
      // console.log(this);
      // console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
      console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
      clock["totalSeconds"] +=1;
    }.bind(clock), 1000);
  }, //End of printTime method

  tick : function(startSecond) {
    if (startSecond !== undefined) {
      console.log("This should print before the clock")
      totalSeconds = startSecond;

    setInterval(function() {
      console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
      clock["totalSeconds"] +=1;
    }.bind(clock), 1000); // End of setInterval method
    }
    else {
      setInterval(function() {
        console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
        clock["totalSeconds"] +=1;
      }.bind(clock), 1000); // End of setInterval method
    }
  } // End of tick method

} //End of clock object


clock.tick(85);

//second try not fully working
var clock = {
  totalSeconds : 0,
  getSeconds : function() {
    // setInterval(function() {
      // console.log(this.totalSeconds);
      // this["totalSeconds"] +=1;
      if (clock["totalSeconds"] >= 0 && clock["totalSeconds"] < 10) {
        return ("0" + clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return (clock["totalSeconds"]);
      }
      else if (clock["totalSeconds"] === 60) {
        return ("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60) {
        if (clock["totalSeconds"] % 60 === 0) {
          return ("0" + (clock["totalSeconds"]-clock["totalSeconds"]));
        }
        else if (clock["totalSeconds"] % 60 <= 9 && clock["totalSeconds"] % 60 >= 1) {
          return ("0" + (clock["totalSeconds"] % 60));
        }
        else if (clock["totalSeconds"] % 60 > 9 && clock["totalSeconds"] % 60 < 60) {
          return (clock["totalSeconds"] % 60);
        }
      }
    // }.bind(this), 1000);
  }, //End of getSeconds function

  getMinutes : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] >= 0 && clock["totalSeconds"] < 10) {
        return("0" + Math.floor(clock["totalSeconds"]/10));
      }
      else if (clock["totalSeconds"] > 9 && clock["totalSeconds"] < 60) {
        return("0" + Math.floor(clock["totalSeconds"]/100));
      }
      else if (clock["totalSeconds"] === 60) {
        return("0" + (clock["totalSeconds"]/clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] > 60 && clock["totalSeconds"] < 600) {
        return("0" + Math.floor(clock["totalSeconds"] / 60));
      }
      else if (clock["totalSeconds"] >= 600 && clock["totalSeconds"] < 3600) {
        return(Math.floor(clock["totalSeconds"]/60));
      }
      else if (clock["totalSeconds"] >= 3600 && clock["totalSeconds"] < 86400) {
        if ((Math.floor(clock["totalSeconds"]) / 60) % 60 <= 9) {
          return("0" + (Math.floor((clock["totalSeconds"] / 60) % 60)));
        }
        else {
          return(Math.floor((clock["totalSeconds"] / 60) % 60));
        }
      }
      else if (clock["totalSeconds"] >= 86400) {
        if (Math.floor((clock["totalSeconds"] - 86400) / 10) <10) {
          return("0" + (Math.floor((clock["totalSeconds"] - 86400)/10)));
        }
        else {
          return(Math.floor((clock["totalSeconds"] - 86400)/10));
        }
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //End of getMinutes function

  getHours : function() {
    // setInterval(function() {
      if (clock["totalSeconds"] < 3600) {
        return("0" + (clock["totalSeconds"] - clock["totalSeconds"]));
      }
      else if (clock["totalSeconds"] >= 3600 && clock["totalSeconds"] < 86400) {
          if (Math.floor(clock["totalSeconds"] / 3600) < 10) {
            return("0" + (Math.floor(clock["totalSeconds"] / 3600)));
          }
          else {
            return(Math.floor((clock["totalSeconds"] / 3600)));
          }
      }
      else if (clock["totalSeconds"] >= 86400) {
        if (Math.floor(clock["totalSeconds"] % 24) < 10) {
          return("0" + (Math.floor(clock["totalSeconds"] % 24)));
        }
        else {
          return(Math.floor(clock["totalSeconds"] % 24));
        }
      }
      // clock["totalSeconds"] +=1;
    // }, 1000); // End of setInterval method
  }, //end of getHours method

  printTime : function() {
    setInterval(function() {
      // console.log(this);
      // console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
      console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
      clock["totalSeconds"] +=1;
    }.bind(clock), 1000);
  }, //End of printTime method

  tick : function(startSecond) {
    if (startSecond !== undefined) {
      clock.totalSeconds = startSecond;

    setInterval(function() {
      console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
      clock["totalSeconds"] +=1;
    }.bind(clock), 1000); // End of setInterval method
    }
    else {
      setInterval(function() {
        console.log(clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds());
        clock["totalSeconds"] +=1;
      }.bind(clock), 1000); // End of setInterval method
    }
  } // End of tick method

} //End of clock object

//----------------------------------------------------------
// /* Predict The Output and Fix the Code */
var dog = {
  age : 5,

  live : function(){
    setInterval(function(){
      this.age += 1;

      if(this.age < 15){
        console.log("Dog lives another dat at age " + this.age);
      } else {
       console.log("Dog has been dead for " + (this.age - 15) + " years");
      }
    }.bind(dog), 1000);
  }
}


//
//
// //What will happen when we run this? Make a prediction, then test.
// //Call over an instructor if you need help understanding what happened.
// //Now fix it.
// dog.live()
//
// -------Original-------------------------------------
// var annoyingDancer = {
//   favoriteDances: ["salsa", "waltz", "hip-hop"],
//
//   currentFav : 0,
//
//   askQuestion : function(){
//     var currentFavDance = this.favoriteDances[this.currentFav];
//     console.log("Do you want to dance " + currentFavDance + " with me?");
//
//     this.currentFav += 1;
//
//     if(this.currentFav === this.favoriteDances.length){
//       this.currentFav = 0;
//     }
//
//     setTimeout(this.askQuestion, 1000);
//   }
// }

var annoyingDancer = {
  favoriteDances: ["salsa", "waltz", "hip-hop"],

  currentFav : 0,

  askQuestion : function(){
    var currentFavDance = this.favoriteDances[this.currentFav];
    console.log("Do you want to dance " + currentFavDance + " with me?");

    this.currentFav += 1;

    if(this.currentFav === this.favoriteDances.length){
      this.currentFav = 0;
    }

    setTimeout(this.askQuestion.bind(annoyingDancer), 1000);
  }
}

//
//
// //What will happen when we run this? Make a prediction, then test.
// //Call over an instructor if you need help understanding what happened.
// //Now fix it.
// annoyingDancer.askQuestion()
