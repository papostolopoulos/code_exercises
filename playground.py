# coding: utf-8

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

print(most_frequent(['a', 'a', 'bi', 'bi', 'bi']))
