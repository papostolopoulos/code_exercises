# coding: utf-8

# 20180425
# BRACKETS https://py.checkio.org/en/mission/brackets/
# You are given an expression with numbers, brackets and operators.
# For this task only the brackets matter. Brackets come in three flavors:
# "{}" "()" or "[]". Brackets are used to determine scope or to restrict
# some expression. If a bracket is open, then it must be closed with a closing
# bracket of the same type. The scope of a bracket must not intersected by
# another bracket. In this task you should make a decision, whether to correct
# an expression or not based on the brackets. Do not worry about operators
# and operands.
#
# Input: An expression with different of types brackets as a string (unicode).
# Output: A verdict on the correctness of the expression in boolean (True or False).
#
# Example:
# checkio("((5+3)*2+1)") == True
# checkio("{[(3+1)+2]+}") == True
# checkio("(3+{1-1)}") == False
# checkio("[1+1]+(2*2)-{3/3}") == True
# checkio("(({[(((1)-2)+3)-3]/3}-3)") == False
# checkio("2+3") == True

def brackets(str):
    symbols = "(){}[]"
    open_symbols = "({["
    close_symbols = ")}]"
    newStr = ""

    for y in str:
        if y in symbols: newStr += y

    if len(newStr) == 0: return True
    if len(newStr) % 2 != 0: return False

    while len(newStr) != 0:
        for x in range(1, len(newStr)):
            if newStr[x] in close_symbols:
                if newStr[x - 1] in open_symbols and close_symbols.find(newStr[x]) == open_symbols.find(newStr[x-1]):
                    newStr = newStr[0:x-1] + newStr[x+1:]
                    break
                else:
                    return False

    return True





print(brackets("((5+3)*2+1)")) # == True
print(brackets("{[(3+1)+2]+}")) # == True
print(brackets("(3+{1-1)}")) # == False
print(brackets("[1+1]+(2*2)-{3/3}")) # == True
print(brackets("(({[(((1)-2)+3)-3]/3}-3)")) # == False
print(brackets("2+3")) # == True
