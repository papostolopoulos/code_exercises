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
