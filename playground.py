# coding: utf-8

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
