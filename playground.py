# coding: utf-8

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
