# coding: utf-8

# 20180424
# ALL THE SAME https://py.checkio.org/en/mission/all-the-same/
# In this mission you should check if all elements in the given list are equal.
#
# Input: List.
# Output: Bool.
#
# Example:
# all_the_same([1, 1, 1]) == True
# all_the_same([1, 2, 1]) == False
# all_the_same(['a', 'a', 'a']) == True
# all_the_same([]) == True

def all_the_same(lst):
    return all(lst[0] == lst[i] for i in range(1, len(lst)))


print(all_the_same([1, 1, 1])) # == True
print(all_the_same([1, 2, 1])) # == False
print(all_the_same(['a', 'a', 'a'])) # == True
print(all_the_same([])) # == True
