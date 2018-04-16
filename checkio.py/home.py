# coding: utf-8

# 20180405
# HOUSE PASSWORD https://py.checkio.org/en/mission/house-password/
# Stephan and Sophia forget about security and use simple passwords for everything.
# Help Nikola develop a password security check module.
# The password will be considered strong enough if its length is greater than or
# equal to 10 symbols,
# it has at least one digit, as well as containing one uppercase letter and one
# lowercase letter in it. The password contains only ASCII latin letters or digits.
#
# Input: A password as a string.
# Output: Is the password safe or not as a boolean or any data type that can be
# converted and processed as a boolean. In the results you will see the converted
# results.
#
# Example:
# checkio('A1213pokl') == False
# checkio('bAse730onE') == True
# checkio('asasasasasasasaas') == False
# checkio('QWERTYqwerty') == False
# checkio('123456123456') == False
# checkio('QwErTy911poqqqq') == True

import re

def house_password(str):
    return True if len(str) >= 10 and len(re.findall(r'([A-Z])', str)) > 0 and len(re.findall(r'([a-z])', str)) > 0 and len(re.findall(r'([0-9])', str)) > 0 else False

# and len(re.findall(r'([A-Z])', str)) > 0 and len(re.findall(r'([a-z])', str)) > 0 and len(re.findall(r'([0-9])', str)) > 0
print(house_password('A1213pokl')) # == False
print(house_password('bAse730onE')) # == True
print(house_password('asasasasasasasaas')) # == False
print(house_password('QWERTYqwerty')) # == False
print(house_password('123456123456')) # == False
print(house_password('QwErTy911poqqqq')) # == True

# 20180406
# THE MOST WANTED LETTER https://py.checkio.org/en/mission/most-wanted-letter/
# You are given a text, which contains different english letters and punctuation symbols.
# You should find the most frequent letter in the text.
# The letter returned must be in lower case.
# While checking for the most wanted letter, casing does not matter,
# so for the purpose of your search, "A" == "a".
# Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

# If you have two or more letters with the same frequency,
# then return the letter which comes first in the latin alphabet.
# For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
#
# Input: A text for analysis as a string.
# Output: The most frequent letter in lower case as a string.
#
# Example:
# checkio("Hello World!") == "l"
# checkio("How do you do?") == "o"
# checkio("One") == "e"
# checkio("Oops!") == "o"
# checkio("AAaooo!!!!") == "a"
# checkio("abe") == "a"

def most_wanted_letter(str):
    letter_dct = {}
    prevailing_letter = ' '
    occurences = 0


    def filter_punctuations(el):
        punctuations = "!?.,:;/- 0123456789"
        return False if el in punctuations else True

    filtered_str = "".join(list(filter(filter_punctuations, str))).lower()

    for x in filtered_str:
        try:
            letter_dct[x] += 1
        except KeyError:
            letter_dct[x] = 1

    for key in letter_dct:
        if letter_dct[key] > occurences:
            occurences = letter_dct[key]
            prevailing_letter = key

        if letter_dct[key] == occurences and key < prevailing_letter:
            prevailing_letter = key

    return prevailing_letter


print(most_wanted_letter("Hello World!")) # == "l"
print(most_wanted_letter("How do you do?")) # == "o"
print(most_wanted_letter("One")) # == "e"
print(most_wanted_letter("Oops!")) # == "o"
print(most_wanted_letter("AAaooo!!!!")) # == "a"
print(most_wanted_letter("abe")) # == "a"


# 20180408
# NON-UNIQUE ELEMENTS https://py.checkio.org/en/mission/non-unique-elements/
#
# You are given a non-empty list of integers (X). For this task, you should
# return a list consisting of only the non-unique elements in this list.
# To do so you will need to remove all unique elements (elements which are
# contained in a given list only once). When solving this task,
# do not change the order of the list.
# Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
# Input: A list of integers.
# Output: The list of integers.
#
# Example:
# checkio([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
# checkio([1, 2, 3, 4, 5]) == []
# checkio([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
# checkio([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]

def non_unique(lst):
    dct = {}

    for x in lst:
        try: dct[x] += 1
        except KeyError: dct[x] = 1

    for y in dct:
        if dct[y] == 1: lst.remove(int(y))

    return lst

print(non_unique([1, 2, 3, 1, 3])) # == [1, 3, 1, 3]
print(non_unique([1, 2, 3, 4, 5])) # == []
print(non_unique([5, 5, 5, 5, 5])) # == [5, 5, 5, 5, 5]
print(non_unique([10, 9, 10, 10, 9, 8])) # == [10, 9, 10, 10, 9]


# 20180408
# MONKEY TYPING https://py.checkio.org/en/mission/monkey-typing/
# Let's suppose our monkeys are typing, typing and typing,
# and have produced a wide variety of short text segments.
# Let's try to check them for sensible word inclusions.
#
# You are given some text potentially including sensible words.
# You should count how many words are included in the given text.
# A word should be whole and may be a part of other word.
# Text letter case does not matter. Words are given in lowercase and don't repeat.
# If a word appears several times in the text, it should be counted only once.
#
# For example, text - "How aresjfhdskfhskd you?", words - ("how", "are", "you", "hello").
# The result will be 3.
#
# Input: Two arguments. A text as a string (unicode for py2)
# and words as a set of strings (unicode for py2).
# Output: The number of words in the text as an integer.
#
# Example:
# count_words("How aresjfhdskfhskd you?", {"how", "are", "you", "hello"}) == 3
# count_words("Bananas, give me bananas!!!", {"banana", "bananas"}) == 2
# count_words("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
#             {"sum", "hamlet", "infinity", "anything"}) == 1

def count_words(str, set):
    counter = 0
    for x in set:
        if x in str.lower():
            counter += 1

    return counter


print(count_words("How aresjfhdskfhskd you?", {"how", "are", "you", "hello"})) # == 3
print(count_words("Bananas, give me bananas!!!", {"banana", "bananas"})) # == 2
print(count_words("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            {"sum", "hamlet", "infinity", "anything"})) # == 1


# 20180409
# Xs AND Os REFEREE https://py.checkio.org/en/mission/x-o-referee/
# Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players
# (X and O) who take turns marking the spaces in a 3×3 grid.
# The player who succeeds in placing three respective marks in a horizontal,
# vertical, or diagonal rows (NW-SE and NE-SW) wins the game.
#
# But we will not be playing this game. You will be the referee for
# this games results. You are given a result of a game and you must determine
# if the game ends in a win or a draw as well as who will be the winner.
# Make sure to return "X" if the X-player wins and "O" if the O-player wins.
# If the game is a draw, return "D".
#
# A game's result is presented as a list of strings, where "X" and "O" are players'
# marks and "." is the empty cell.
#
# Input: A game result as a list of strings (unicode).
# Output: "X", "O" or "D" as a string.
#
# Example:
# checkio([
#     "X.O",
#     "XX.",
#     "XOO"]) == "X"
# checkio([
#     "OO.",
#     "XOX",
#     "XOX"]) == "O"
# checkio([
#     "OOX",
#     "XXO",
#     "OXX"]) == "D"

def tic_tac_toe(lst):
    for x in range(0, len(lst)):
        if lst[x][0] == lst[x][1] and lst[x][0] == lst[x][2] and lst[x][0] != ".":
            return lst[x][0]

        if lst[0][x] == lst[1][x] and lst[0][x] == lst[2][x] and lst[0][x] != ".":
            return lst[0][x]

    if (lst[0][0] == lst[1][1] and lst[1][1] == lst[2][2] and lst[1][1] != ".") or (lst[0][2] == lst[1][1] and lst[1][1] == lst[2][0] and lst[1][1] != "."):
        return lst[1][1]

    return "D"

print(tic_tac_toe([
    "X.O",
    "XX.",
    "XOO"])) # == "X"
print(tic_tac_toe([
    "OO.",
    "XOX",
    "XOX"])) # == "O"
print(tic_tac_toe([
    "OOX",
    "XXO",
    "OXX"])) # == "D"


# 20180412
# PAWN BROTHERHOOD https://py.checkio.org/en/mission/pawn-brotherhood/
# Almost everyone in the world knows about the ancient game Chess and has
# at least a basic understanding of its rules.
# It has various units with a wide range of movement patterns allowing for
# a huge number of possible different game positions
# (for example Number of possible chess games at the end of the n-th plies.)
# For this mission, we will examine the movements and behavior of chess pawns.
#
# Chess is a two-player strategy game played on a checkered game board laid out
# in eight rows (called ranks and denoted with numbers 1 to 8) and eight columns
# (called files and denoted with letters a to h) of squares. Each square of the
# chessboard is identified by a unique coordinate pair — a letter and a number
# (ex, "a1", "h8", "d6"). For this mission we only need to concern
# ourselves with pawns. A pawn may capture an opponent's piece on a square
# diagonally in front of it on an adjacent file, by moving to that square.
# For white pawns the front squares are squares with greater row than their.
#
# A pawn is generally a weak unit, but we have 8 of them which we can use to
# build a pawn defense wall. With this strategy, one pawn defends the others.
# A pawn is safe if another pawn can capture a unit on that square. We have
# several white pawns on the chess board and only white pawns.
# You should design your code to find how many pawns are safe.
#
# You are given a set of square coordinates where we have placed white pawns.
# You should count how many pawns are safe.
#
# Input: Placed pawns coordinates as a set of strings.
# Output: The number of safe pawns as a integer.
#
# Example:
# safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"}) == 6
# safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"}) == 1


def safe_pawns(lst):
    columns = "abcdefgh"
    ranks = "12345678"
    counter = 0

    for x in lst:
        # print(columns.find(x[0]) - 1, ranks.find(x[1]) - 1)
        if columns.find(x[0]) - 1 == -1 or ranks.find(x[1]) - 1 == -1:
            back_left = None
        else:
            back_left = columns[columns.find(x[0]) - 1] + ranks[ranks.find(x[1]) - 1]

        if columns.find(x[0]) + 1 == len(lst) or ranks.find(x[1]) - 1 == -1:
            back_right = None
        else:
            back_right = columns[columns.find(x[0]) + 1] + ranks[ranks.find(x[1]) - 1]

        # print(x, back_left, back_right)

        if back_left in lst or back_right in lst:
            counter += 1

    return counter


# From the internet
def safe_pawns(pawns):
    count=0
    for j in list(pawns):
        list1=[chr(ord(j[0])-1)+str(int(j[1])-1),chr(ord(j[0])+1)+str(int(j[1])-1)]   # "b4"=>["c3","d3"]
        for i in list1:
            if i in pawns:
                count=count+1
                break
    return count

print(safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"})) # == 6
print(safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"})) # == 1
print(safe_pawns(["a1","a2","a3","a4","h1","h2","h3","h4"])) # == 0
print(safe_pawns(["a1","b2","c3","d4","e5","f6","g7","h8"])) # == 7
print(safe_pawns(["a8","b7","c6","d5","e4","f3","g2","h1"])) # == 7
print(safe_pawns(["a2","b4","c6","d8","e1","f3","g5","h8"])) # == 0

20180413
In this mission you should write you own py3 implementation
(but you can use py2 for this) of the built-in functions min and max.
Some builtin functions are closed here: import, eval, exec, globals.
Don't forget you should implement two functions in your code.

max(iterable, *[, key]) or min(iterable, *[, key])
max(arg1, arg2, *args[, key]) or min(arg1, arg2, *args[, key])

Return the largest (smallest) item in an iterable
or the largest(smallest) of two or more arguments.

If one positional argument is provided, it should be an iterable.
The largest (smallest) item in the iterable is returned.
If two or more positional arguments are provided,
the largest (smallest) of the positional arguments is returned.

The optional keyword-only key argument specifies a function of one argument
that is used to extract a comparison key from each list element (for example, key=str.lower).

If multiple items are maximal (minimal), the function returns the first one encountered.
-- Python Documentation (Built-in Functions)

Input: One positional argument as an iterable or two or more positional arguments.
Optional keyword argument as a function.

Output: The largest item for the "max" function and the smallest for the "min" function.

Example:

max(3, 2) == 3
min(3, 2) == 2
max([1, 2, 0, 3, 4]) == 4
min("hello") == "e"
max(2.2, 5.6, 5.9, key=int) == 5.6
min([[1,2], [3, 4], [9, 0]], key=lambda x: x[1]) == [9, 0]
