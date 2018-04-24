# coding: utf-8

# 20180423
# LONG REPEAT https://py.checkio.org/en/mission/long-repeat/
# There are four substring missions that were born all in one day and
# you shouldn’t be needed more than one day to solve them.
# All of those mission can be simply solved by brute force, but is it always
# the best way to go? (you might not have access to all of those missions yet,
# but they are going to be available with more opened islands on the map).
#
# This mission is the first one of the series. Here you should find the length
# of the longest substring that consists of the same letter.
# For example, line "aaabbcaaaa" contains four substrings with the same letters
# "aaa", "bb","c" and "aaaa".
# The last substring is the longest one which makes it an answer.
#
# Input: String.
#
# Output: Int.
#
# Example:
#
# long_repeat('sdsffffse') == 4
# long_repeat('ddvvrwwwrggg') == 3

def long_repeat(str):
    if len(str) == 0:
        return 0
    result = 1
    counter = 1
    for x in range(1, len(str)):
        if str[x] == str[x - 1]:
            counter += 1
            if counter > result:
                result = counter
        else:
            counter = 1
            
    return result


print(long_repeat('sdsffffse')) #== 4
print(long_repeat('ddvvrwwwrggg')) #== 3
print(long_repeat("aa")) #== 2
