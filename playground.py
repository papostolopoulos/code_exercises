# coding: utf-8

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

def most_numbers(*args):
    if len(args) == 0: return 0
    return max(args) - min(args)


print(most_numbers(1, 2, 3, 8, 4))
