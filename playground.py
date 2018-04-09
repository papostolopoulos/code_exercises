# coding: utf-8

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
