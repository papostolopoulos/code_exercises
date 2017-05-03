/*### INSTRUCTIONS
#
# Welcome to the App Academy technical interview. Over the next 45 minutes, you
# will be given a series of three programming questions. For each question, you
# will have 15 minutes to write a solution in Ruby, Python, JavaScript, Perl,
# PHP, or Java. We accept partial solutions, and overall logic is more important
# to us than exact syntax, so try not to stress if your solution is incomplete
# or imperfect. Take a deep breath and focus on your approach to the next
# problem.
#
# Talk us through your approach as you work through the problem.  We need to know
# how you communicate the way that you solve problems.  Some people prefer to talk
# while they come to a solution, while other people prefer to walk us through
# after they've done a bit of work.  Either way is fine.
#
# We want to evaluate you on your own work, so the interview is closed-book. You
# are not permitted to consult any outside sources: don't ask others for help,
# search the web for solutions, or refer to any notes or code you may have
# written previously. Don't run your code in any REPL or interpreter, and don't
# share these questions or your solutions with anyone else (even anonymously).
# We take cheating very seriously, and violation is grounds for rejection or
# dismissal from the course.
#
# That said, you may ask your interviewer any questions you might have. We are
# more than happy to help clarify the question or let you know the right syntax
# for the language you're using.
#
# Good luck!

#### Five Sort ####
# Write a function that accepts an array of numbers. It should return a copy of
# the array, with all instances of the number 5 moved to the end.
# The ordering of the other elements should remain unchanged.
#
# For example:
# nums = [1, 5, 8, 5, 5, 2, 3]
# sorted = five_sort(nums)
# sorted # => [1, 8, 2, 3, 5, 5, 5] */

function sortedFives(array) {
    var counter = 0;
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] !== 5) {
            newArray.push(array[i]);
        }
        else {
        counter +=1
        }
    }
    for (var j = 0; j < counter; j++) {
        newArray.push(5);
    }
    return newArray;
}

/*#### Winning Streak ####
# You are a professional chess player. Your competitive record is stored as a
# string of 'W's and 'L's, signifying matches you've won and lost. Write a
# function that determines your longest winning streak from a given record.
#
# Examples:
# winning_streak("LW") # => 1
# winning_streak("LL") # => 0
# winning_streak("WWW") # => 3
# winning_streak("WLLWWWLW") # => 3*/

function winningStreak(string) {
    var counter = 0;
    var streak = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "W") {
            counter +=1;
        }
        else if (string[i] === "L") {
            counter = 0;
            if (streak < counter)  {
            streak = counter;
            }
        }
    }
    if (counter > streak) {
        return counter;
    }
    else {
        return streak;
    }
}

/*#### Aliquot Sequence ####
# A number's aliquot sum is the sum of all of its factors excluding itself.
#
# For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
#
# We can use the aliquot sum to define a special sequence, called the
# aliquot sequence. The aliquot sequence of a number begins with the
# number itself. The second number in the sequence is the first number's
# aliquot sum, the third number is the second number's aliquot sum, and
# so on.
#
# For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
#
# Write a function that takes in two numbers, base and n, and returns the
# aliquot sequence of length n starting with base.
#
# Examples:
# aliquot_sequence(10, 4) # => [10, 8, 7, 1]
# aliquot_sequence(10, 2) # => [10, 8]
# aliquot_sequence(7, 4) # => [7, 1, 0, 0]*/

function aliquotSequence(base, n) {
    var finalArray = [base];
    for (var j = 1; j < n; j++) {
    var counter = 0;
        for (var i = 1; i < base; i++) {

        if (base % i === 0) {
            counter += i;
        }
    }
    finalArray.push(counter);
    base = counter;
    }

    return finalArray;
}
