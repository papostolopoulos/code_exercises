# coding: utf-8


# /*20170803
# COUNT INVERSION https://py.checkio.org/mission/count-inversions/
# In computer science and discrete mathematics, an inversion is a pair of places
# in a sequence where the elements in these places are out of their natural order.
# So, if we use ascending order for a group of numbers, then an inversion is when
# larger numbers appear before lower number in a sequence.
#
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
