# coding: utf-8

# https://py.checkio.org/station/library/

# 20171116
# SAY HI https://py.checkio.org/mission/say-history/ (NOT IN THE LIST OF JS EXERCISES)
# In this mission you should write a function that introduce a percone with
# a given parameters in attributes.
#
# Input: Two arguments. String and positive integer.
# Output: String.
#
# Example:
# say_hi("Alex", 32) == "Hi. My name is Alex and I'm 32 years old"
# say_hi("Frank", 68) == "Hi. My name is Frank and I'm 68 years old"

# solution with plusses
def say_hi(name, int):
    return("Hi. My name is " + name + " and I'm " + str(int) + " years old")


# solutiion with the % operator
def say_hi(name, int):
    return "Hi. My name is %s and I'm %s years old" % (name, str(int))

# solution with the .join() method
def say_hi(name, int):
    piece_1 = "Hi. My name is "
    piece_2 = " and I'm "
    piece_3 = " years old."
    result = " ".join([piece_1, name, piece_2, str(int), piece_3])
    return result

# Solution using the {} operator
def say_hi(name, int):
    return "Hi. My name is {} and I'm {} years old" .format(name, int)


# 20171116
# CORRECT SENTENCE https://py.checkio.org/mission/correct-sentence/
# For the input of your function will be given one sentence.
# You have to return its fixed copy in a way so it’s always starts with
# a capital letter and ends with a dot.
#
# Pay attention to the fact that not all of the fixes is necessary.
# If a sentence already ends with a dot then adding another one will be a mistake.
#
# Input: A string.
# Output: A string.
#
# Example:
# correct_sentence("greetings, friends") == "Greetings, friends."
# correct_sentence("Greetings, friends") == "Greetings, friends."
# correct_sentence("Greetings, friends.") == "Greetings, friends."

def correct_sentence(str):
    return str[0].upper() + str[1:] + "." if str[-1] != "." else str[0].upper() + str[1:]


# 20171117
# FIRST WORD https://py.checkio.org/mission/first-word/
# You are given a string where you have to find its first word.
#
# When solving a task pay attention to the following points:
#
# There can be dots and commas in a string.
# A string can start with a letter or, for example, a dot or space.
# A word can contain an apostrophe and it's a part of a word.
# The whole text can be represented with one word and that's it.
# Input: A string.
#
# Output: A string.
#
# Example:
#
# first_word("Hello world") == "Hello"
# first_word("greetings, friends") == "greetings"
# first_word(" a word ")
# first_word("... and so on ...")
#
# How it is used: the first word is a command in a command line
# Precondition: the text can contain a-z A-Z , . '

def first_word(str):
    punctuations = ",. "
    while punctuations.find(str[0]) != -1:
        str = str[1:]

    for x in range(0, len(str) - 1):
        if punctuations.find(str[x]) == -1 and punctuations.find(str[x + 1]) != -1:
            return str[:x + 1]

    return str

# from the internet
import re

def first_word(text: str) -> str:
    return re.search("[a-zA-Z']+", text).group()


# solution as of 20180309
def first_word(str):
    punctuations = "., "
    final = ""
    while str[0] in punctuations:
        str = str[1:]

    while str[0] not in punctuations:
        final += str[0]
        str = str[1:]

    return final

# 20171128
# SECOND INDEX https://py.checkio.org/mission/second-index/
# You are given two strings and you have to find an index of the second occurrence
# of the second string in the first one.
#
# Let's go through the first example where you need to find the second occurrence
# of "s" in a word "sims". It’s easy to find its first occurrence with a function
# index or find which will point out that "s" is the first symbol in a word "sims"
# and therefore the index of the first occurrence is 0.
# But we have to find the second "s" which is 4th in a row and that means that the
# index of the second occurrence (and the answer to a question) is 2.
#
# Input: Two strings.
#
# Output: Int or None
#
# Example:
#
# second_index("sims", "s") == 3
# second_index("find the river", "e") == 12
# second_index("hi", " ") is None

def second_index(str, symbol):
    if str.count(symbol) <= 1: return None
    # if symbol not in str: return None
    return(str.index(symbol, str.index(symbol) + 1))


# 20171119
# BETWEEN MARKERS https://py.checkio.org/mission/between-markers/
# You are given a string and two markers (the initial and final).
# You have to find a substring enclosed between these two markers. But there are a few important conditions:
#
# The initial and final markers are always different.
# The text must be found only between the first instances of the marker.
# If there is no initial marker then the beginning should be considered as the beginning of a string.
# If there is no final marker then the ending should be considered as the ending of a string.
# If the initial and final markers are missing then simply return the whole string.
# If the final marker is standing in front of the initial one then return an empty string.
# Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
#
# Output: A string.
#
# Example:
#
# between_markers('What is >apple<', '>', '<') == 'apple'
# between_markers('No[/b] hi', '[b]', '[/b]') == 'No'
# between_markers("No <hi>",">","<") == ""
#
# How it is used: for parsing texts
# Precondition: can't be more than one marker

def between_markers(str, init, final):
    if str.count(init) > 0 and str.count(final) > 0:
        if str.index(final) < str.index(init): return ""
    startStr = str.split(final)[0]
    endStr = startStr.split(init)
    return endStr[- 1]


# Solution from 20180315
def between_markers(str, m1, m2):
    if m1 in str and m2 in str:
        return str[str.index(m1) + 1: str.index(m2)]
    elif m1 in str:
        return str[str.index(m1) + 1:]
    elif m2 in str:
        return str[: str.index(m2)]
    else:
        return str


# 20180323
# BEST STOCK https://py.checkio.org/mission/best-stock/
# You are given the current stock prices. You have to find out which stocks cost more.
# Input: The dictionary where the market identifier code is a key and the value is a stock price.
# Output: A string and the market identifier code.

# best_stock({
#     'CAC': 10.0,
#     'ATX': 390.2,
#     'WIG': 1.2
# }) == 'ATX'
# best_stock({
#     'CAC': 91.1,
#     'ATX': 1.01,
#     'TASI': 120.9
# }) == 'TASI'

def best_stock(dct):
    value = 0
    result = ""
    for key in dct:
        if dct[key] > value:
            value = dct[key]
            result = key

    return result


print(best_stock({
    'CAC': 10.0,
    'ATX': 390.2,
    'WIG': 1.2
}))
print(best_stock({
    'CAC': 91.1,
    'ATX': 1.01,
    'TASI': 120.9
}))

# 20180323
# POPULAR WORDS https://py.checkio.org/mission/popular-words/
# In this mission your task is to determine the popularity of certain words in the text.
# At the input of your function are given 2 arguments: the text and the array of
# words the popularity of which you need to determine.
#
# When solving this task pay attention to the following points:
#
# The text can consist of multiple lines with punctuation.
# The words should be sought in all registers. This means that if you need to find
# a word "one" then words like "one", "One", "oNe", "ONE" etc. will do.
# The search words are always indicated in the lowercase.
# If the word wasn’t found even once, it has to be returned in the dictionary
# with 0 (zero) value.
# Input: The text and the search words array.
#
# Output: The dictionary where the search words are the keys and values are the
# number of times when those words are occurring in a given text.
#
# Example:
# popular_words('''
# When I was One,
# I had just begun.
# When I was Two,
# I was nearly new.
# ''', ['i', 'was', 'three']) == {
#     'i': 4,
#     'was': 3,
#     'three': 0
# }

def popular_words(str, list_of_words):
    str_list = str.replace("\n", " ").lower().split(" ")
    punctuations = [",", "."]
    dct = {}
    print(dct)

    for z in range(0, len(list_of_words)):
        dct[list_of_words[z]] = 0

    for x in range(0, len(str_list)):

        if str_list[x][-1:] in punctuations:
            str_list[x] = str_list[x][0: -1]

        if str_list[x] in list_of_words:
            dct[str_list[x]] += 1

    return dct


print(popular_words('''
When I was One,
I had just begun.
When I was Two,
I was nearly new.
''', ['i', 'was', 'three']))



# 20180323
# BIGGER PRICE https://py.checkio.org/mission/bigger-price/
# You have a table with all available goods in the store.
# The data is represented as a list of dicts
# Your mission here is to find the TOP most expensive goods.
# The amount we are looking for will be given as a first argument and the whole data as the second one
#
# Input: int and list of dicts. Each dicts has two keys "name" and "price"
# Output: the same as the second Input argument.
#
# Example:
# bigger_price(2, [
#     {"name": "bread", "price": 100},
#     {"name": "wine", "price": 138},
#     {"name": "meat", "price": 15},
#     {"name": "water", "price": 1}
# ]) == [
#     {"name": "wine", "price": 138},
#     {"name": "bread", "price": 100}
# ]
#
# bigger_price(1, [
#     {"name": "pen", "price": 5},
#     {"name": "whiteboard", "price": 170}
# ]) == [{"name": "whiteboard", "price": 170}]

def bigger_price(num, lst):
    number_list = []
    final_result = []

    for x in range(0, len(lst)):
        number_list.append(lst[x]["price"])

    number_list = sorted(number_list, reverse=True)[0:num]

    for y in number_list:
        for z in range(0, len(lst)):
            if lst[z]["price"] == y:
                final_result.append(lst[z])
                break

    return final_result

# 20171114
# FIZZ BUZZ https://py.checkio.org/mission/fizz-buzz/
# "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
#
# You should write a function that will receive a positive integer and return:
# "Fizz Buzz" if the number is divisible by 3 and by 5;
# "Fizz" if the number is divisible by 3;
# "Buzz" if the number is divisible by 5;
# The number as a string for other cases.
# Input: A number as an integer.
#
# Output: The answer as a string.
#
# Example:
#
# fizzBuzz(15) == "Fizz Buzz"
# fizzBuzz(6) == "Fizz"
# fizzBuzz(5) == "Buzz"
# fizzBuzz(7) == "7"

def fizzBuzz(num):
    return "Fizz Buzz" if num % 3 == 0 and num % 5 == 0 else "Fizz" if num % 3 == 0 else "Buzz" if num % 5 == 0 else str(num)


#
# /*20180317
# THE MOST NUMBERS https://py.checkio.org/mission/most-numbers/
# Let's work with numbers.
#
# You are given an array of numbers (floats).
# You should find the difference between the maximum and minimum element.
# Your function should be able to handle an undefined amount of arguments.
# For an empty argument list, the function should return 0.
#
# Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.
# So we should check the result with ±0.001 precision.
# Think about how to work with an arbitrary number of arguments.
#
# Input: An arbitrary number of arguments as numbers (int, float).
#
# Output: The difference between maximum and minimum as a number (int, float).
#
# Example:
#
# mostNumbers(1, 2, 3) == 2
# mostNumbers(5, -5) == 10
# mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
# mostNumbers() == 0
# */
#

def most_numbers(*args):
    return max(args) - min(args) if len(args) > 0 else 0


# 20171115
# EVEN THE LAST https://py.checkio.org/mission/even-last/
# You are given an array of integers. You should find the sum of the elements with even indexes
# (0th, 2nd, 4th...) then multiply this summed number and the final element of the array together.
# Don't forget that the first element has an index of 0.
#
# For an empty array, the result will always be 0 (zero).
#
# Input: A list of integers.
#
# Output: The number as an integer.
#
# Example:
#
# evenLast([0, 1, 2, 3, 4, 5]) == 30
# evenLast([1, 3, 5]) == 30
# evenLast([6]) == 36
# evenLast([]) == 0

def evenLast(lst):
    lst_sum = 0
    if len(lst) == 0:
        return lst_sum

    for x in range(0, len(lst)):
        if x % 2 == 0:
            lst_sum += lst[x]

    return lst_sum * lst[len(lst) - 1]


#  from the internet
def checkio(array):
    if len(array) == 0: return 0
    return sum(array[0::2]) * array[-1]


# 20171205
# SECRET MESSAGE https://py.checkio.org/mission/secret-message/
# "Where does a wise man hide a leaf? In the forest.
# But what does he do if there is no forest? ... He grows a forest to hide it in."
# -- Gilbert Keith Chesterton
#
# Ever tried to send a secret message to someone without using the postal service?
# You could use newspapers to tell your secret. Even if someone finds your message,
# it's easy to brush them off and that its paranoia and a bogus conspiracy theory.
# One of the simplest ways to hide a secret message is to use capital letters.
# Let's find some of these secret messages.
#
# You are given a chunk of text. Gather all capital letters in one word in the order
# that they appear in the text.
#
# For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.",
# if we collect all of the capital letters, we get the message "HELLO".
#
# Input: A text as a string (unicode).
# Output: The secret message as a string or an empty string.
#
# Example:
# find_message("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
# find_message("hello world!") == ""

import re

def find_message(str):
    return re.sub('[^A-Z]', '', str)


# Solution on 20180317
import re

def find_message(str):
    endStr = ""
    for x in range(0, len(str) - 1):
        if(re.match("[A-Z]", str[x])): endStr += str[x]

    return endStr


# /*20180317
# THREE WORDS https://py.checkio.org/mission/three-words/
#
# Let's teach the Robots to distinguish words and numbers.
#
# You are given a string with words and numbers separated by whitespaces (one space).
# The words contains only letters. You should check if the string contains
# three words in succession.
# For example, the string "start 5 one two three 7 end" contains three words in succession.
#
# Input: A string with words.
#
# Output: The answer as a boolean.
#
# Example:
#
# threeWords("Hello World hello") == True
# threeWords("He is 123 man") == False
# threeWords("1 2 3 4") == False
# threeWords("bla bla bla bla") == True
# threeWords("Hi") == False
# */
#
#
import re

def threeWords(str):
    counter = 0
    splitStr = str.split(" ")
    for x in range(0, len(splitStr)):
        if (re.search("[0-9]", splitStr[x])): counter = 0
        else: counter += 1
        if counter >= 3: return True

    return False
#
# /* 20180317
# INDEX POWER https://py.checkio.org/mission/index-power/
# You are given an array with positive numbers and a number N.
# You should find the N-th power of the element in the array with the index N.
# If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
#
# Let's look at a few examples:
# - array = [1, 2, 3, 4] and N = 2, then the result is 32 == 9;
# - array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
#
# Input: Two arguments. An array as a list of integers and a number as a integer.
#
# Output: The result as an integer.
#
# Example:
#
# indexPower([1, 2, 3, 4], 2) == 9
# indexPower([1, 3, 10, 100], 3) == 1000000
# indexPower([0, 1], 0) == 1
# indexPower([1, 2], 3) == -1
#
# */


def index_power(arr, idx):
    if len(arr) <= idx: return -1
    return arr[idx] ** idx


#20180324
#RIGHT TO LEFT
# "For centuries, left-handers have suffered unfair discrimination in a world designed
# for right-handers."
# Santrock, John W. (2008). Motor, Sensory, and Perceptual Development.
#
# "Most humans (say 70 percent to 95 percent) are right-handed, a minority
# (say 5 percent to 30 percent) are left-handed, and an indeterminate number of
# people are probably best described as ambidextrous."
# Scientific American. www.scientificamerican.com
#
# One of the robots is charged with a simple task: to join a sequence of strings
# into one sentence to produce instructions on how to get around the ship.
# But this robot is left-handed and has a tendency to joke around and
# confuse its right-handed friends.
#
# You are given a sequence of strings.
# You should join these strings into chunk of text where the initial strings are
# separated by commas. As a joke on the right handed robots, you should replace
# all cases of the words "right" with the word "left",
# even if it's a part of another word. All strings are given in lowercase.
#
# Input: A sequence of strings as a tuple of strings (unicode).
#
# Output: The text as a string.
#
# Example:
# left_join(("left", "right", "left", "stop")) == "left,left,left,stop"
# left_join(("bright aright", "ok")) == "bleft aleft,ok"
# left_join(("brightness wright",)) == "bleftness wleft"
# left_join(("enough", "jokes")) == "enough,jokes"


def left_join(tup):
    end_list = []
    for x in tup:
        str = x
        if "right" in str:
            str = str.replace("right", "left")

        end_list.append(str)

    return ",".join(end_list)


#
#
#
# /*20180324
# DIGITS MULTIPLICATION https://py.checkio.org/mission/digits-multiplication/
# You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
# For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
#
# Input: A positive integer.
#
# Output: The product of the digits as an integer.
#
# digitsMultip(123405) == 120
# digitsMultip(999) == 729
# digitsMultip(1000) == 1
# digitsMultip(1111) == 1
#
def digits_multip(num):
    end_result = 1
    for x in range(0, len(str(num))):
        if int(str(num)[x]) != 0:
            end_result *= int(str(num)[x])

    return end_result



print(digits_multip(123405))
print(digits_multip(999))
print(digits_multip(1000))
print(digits_multip(1111))

# /*20170807
# NUMBER BASE https://py.checkio.org/mission/number-radix/
# Do you remember the radix and Numeral systems from math class? Let's practice with it.
#
# You are given a positive number as a string along with the radix for it.
# Your function should convert it into decimal form.
# The radix is less than 37 and greater than 1.
# The task uses digits and the letters A-Z for the strings.
#
# Watch out for cases when the number cannot be converted.
# For example: "1A" cannot be converted with radix 9.
# For these cases your function should return -1.
#
# Input: Two arguments. A number as string and a radix as an integer.
#
# Output: The converted number as an integer.
#
# Example:
#
# number_radix("AF", 16) == 175
# number_radix("101", 2) == 5
# number_radix("101", 5) == 26
# number_radix("Z", 36) == 35
# number_radix("AB", 10) == -1
#
# Precondition:
# re.match("\A[A-Z0-9]\Z", str_number)
# 0 < len(str_number) ≤ 10
# 2 ≤ radix ≤ 36
# */

def number_radix(str, num):
    try:
        return int(str, num)
    except ValueError:
        return -1

print(number_radix("AF", 16)) # == 175
print(number_radix("101", 2)) # == 5
print(number_radix("101", 5)) # == 26
print(number_radix("Z", 36)) # == 35
print(number_radix("AB", 10)) # == -1


# 20180329
# ABSOLUTE SORTING https://py.checkio.org/mission/absolute-sorting/
# Let's try some sorting. Here is an array with the specific rules.
# The array (a tuple) has various numbers.
# You should sort it, but sort it by absolute value in ascending order.
# For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).
# Your function should return the sorted list or tuple.
#
# Precondition: The numbers in the array are unique by their absolute values.
# Input: An array of numbers , a tuple..
# Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.
#
# Addition: The results of your function will be shown as a list in the tests explanation panel.
# Example:
# checkio((-20, -5, 10, 15)) == [-5, 10, 15, -20] # or (-5, 10, 15, -20)
# checkio((1, 2, 3, 0)) == [0, 1, 2, 3]
# checkio((-1, -2, -3, 0)) == [0, -1, -2, -3]

def sort_tup(tup):
    dct = {}
    dict_keys = []
    result = []
    for x in tup:
        absolute = abs(x)
        dct[absolute] = x

    for x in dct.keys():
        dict_keys.append(x)

    dict_keys.sort()

    for y in range(0, len(dict_keys)):
        result.append(dct[dict_keys[y]])

    return result


print(sort_tup((-20, -5, 10, 15))) # == [-5, 10, 15, -20] # or (-5, 10, 15, -20)
print(sort_tup((1, 2, 3, 0))) # == [0, 1, 2, 3]
print(sort_tup((-1, -2, -3, 0))) # == [0, -1, -2, -3]


# 20100330
# THE MOST FREQUENT https://py.checkio.org/en/mission/the-most-frequent/
# You have a sequence of strings, and you’d like to determine the most frequently
# occurring string in the sequence.
# Input: a list of strings.
# Output: a string.
#
# Example:
# most_frequent([
#     'a', 'b', 'c',
#     'a', 'b',
#     'a'
# ]) == 'a'
# most_frequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'

def most_frequent(lst):
    dct = {}
    counter = 0
    result = ""

    for x in range(0, len(lst)):
        try:
            dct[lst[x]] += 1
        except KeyError:
            dct[lst[x]] = 1

    for y in dct:
        if dct[y] > counter:
            result = y
            counter = dct[y]

    return result


# 20100402
# # EASY UNPACK https://py.checkio.org/en/mission/easy-unpack/
# Your mission here is to create a function that gets an tuple and returns a
# tuple with 3 elements - first, third and second to the last for the given array
# Input: A tuple, at least 3 elements long.
# Output: A tuple.
# Example:
# easy_unpack((1, 2, 3, 4, 5, 6, 7, 9)) == (1, 3, 7)
# easy_unpack((1, 1, 1, 1)) == (1, 1, 1)
# easy_unpack((6, 3, 7)) == (6, 7, 3)

def easy_unpack(tup):
    lst = []
    lst.append(tup[0])
    lst.append(tup[2])
    lst.append(tup[-2])
    return tuple(lst)

# From the internet
def easy_unpack(elements):
    return (elements[0],elements[2],elements[-2])

print(easy_unpack((1, 2, 3, 4, 5, 6, 7, 9))) # == (1, 3, 7)
print(easy_unpack((1, 1, 1, 1))) # == (1, 1, 1)
print(easy_unpack((6, 3, 7))) # == (6, 7, 3)


#20180403
#DATE AND TIME CONVERTER https://py.checkio.org/en/mission/date-and-time-convertor/
# Computer date and time format consists only of numbers, for example: 21.05.2018 16:30
# Humans prefer to see something like this: 21 May 2018 year, 16 hours 30 minutes
# Your task is simple - convert the input date and time from computer format into a "human" format.
# Input: Date and time as a string
# Output: The same date and time, but in a more readable format
#
# Example:
# date_time("01.01.2000 00:00") == "1 January 2000 year 0 hours 0 minutes"
# date_time("19.09.2999 01:59") == "19 September 2999 year 1 hour 59 minutes"
# date_time("21.10.1999 18:01") == "21 October 1999 year 18 hours 1 minute"
# note: words "hour" and "minute" are used only when time is 01:mm (1 hour) or hh:01 (1 minute).
# In other cases it should be used "hours" and "minutes".

import datetime

def date_time(str):
    hours = "hours"
    minutes = "minutes"
    first_list = str.split(".")
    second_list = first_list[-1].split(" ")

    print(first_list)
    first_list.remove(first_list[-1])
    first_list.extend(second_list)
    second_list = first_list[-1].split(":")
    first_list.remove(first_list[-1])
    first_list.extend(second_list)

    for i in range(0, len(first_list)):
        first_list[i] = int(first_list[i])

    if first_list[3] == 1:
        hours = "hour"

    if first_list[4] == 1:
        minutes = "minute"

    return(datetime.datetime(first_list[2], first_list[1], first_list[0], first_list[3], first_list[4]).strftime("%-d %B %Y year %-H {} %-M {}".format(hours, minutes)))


#
# /*20180321
# COUNT INVERSION https://py.checkio.org/mission/count-inversions/
# In computer science and discrete mathematics, an inversion is a pair of places
# in a sequence where the elements in these places are out of their natural order.
# So, if we use ascending order for a group of numbers, then an inversion
# is when larger numbers appear before lower number in a sequence.
# Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
# - 5 and 3; - 5 and 4; - 7 and 6.
#
# You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
#
# Input: A sequence as a tuple of integers.
#
# Output: The inversion number as an integer.
#
# Example:
#
# countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
# countInversion([0, 1, 2, 3]) == 0
# */
#
#

#Not submitted yet as of 20180321 You need to open "Ice Base"
# station to solve this
def count_inversion(tup):
    counter = 0
    for x in range(0, len(tup) - 1):
        rotator = tup[x+1]
        if tup[x+1] - tup[x] < 0:
            tup[x+1] = tup[x]
            tup[x] = rotator
            counter += 1

    return counter
#
#
# /*20170803
# COMMON WORDS https://py.checkio.org/mission/common-words/
# Let's continue examining words. You are given two string with words separated by commas.
# Try to find what is common between these strings.
# The words are not repeated in the same string.
#
# Your function should find all of the words that appear in both strings.
# The result must be represented as a string of words separated by commas in alphabetic order.
#
# Input: Two arguments as strings.
#
# Output: The common words as a string.
#
# Example:
#
# commonWords("hello,world", "hello,earth") == "hello"
# commonWords("one,two,three", "four,five,six") == ""
# commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
# */
#
#
#
#
