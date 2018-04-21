# coding: utf-8

# 20180413
# In this mission you should write you own py3 implementation
# (but you can use py2 for this) of the built-in functions min and max.
# Some builtin functions are closed here: import, eval, exec, globals.
# Don't forget you should implement two functions in your code.
#
# max(iterable, *[, key]) or min(iterable, *[, key])
# max(arg1, arg2, *args[, key]) or min(arg1, arg2, *args[, key])
#
# Return the largest (smallest) item in an iterable
# or the largest(smallest) of two or more arguments.
#
# If one positional argument is provided, it should be an iterable.
# The largest (smallest) item in the iterable is returned.
# If two or more positional arguments are provided,
# the largest (smallest) of the positional arguments is returned.
#
# The optional keyword-only key argument specifies a function of one argument
# that is used to extract a comparison key from each list element (for example, key=str.lower).
#
# If multiple items are maximal (minimal), the function returns the first one encountered.
# -- Python Documentation (Built-in Functions)
#
# Input: One positional argument as an iterable or two or more positional arguments.
# Optional keyword argument as a function.
#
# Output: The largest item for the "max" function and the smallest for the "min" function.
#
# Example:
#
# max(3, 2) == 3
# min(3, 2) == 2
# max([1, 2, 0, 3, 4]) == 4
# min("hello") == "e"
# max(2.2, 5.6, 5.9, key=int) == 5.6
# min([[1,2], [3, 4], [9, 0]], key=lambda x: x[1]) == [9, 0]

def max(*args, **kwargs):
    key = kwargs.get("key", None)
    print("printing", int(5.3))

    if len(args) == 1:
        #while loop to remove last element?
        return(sorted(args[0], key = key)[-1])

    return(sorted(args, key = key)[-1])




def min(*args, **kwargs):
    key = kwargs.get("key", None)

    if len(args) == 1:
        return(sorted(args[0], reverse = True, key=key)[-1])

    return(sorted(args, reverse = True, key=key)[-1])




    # key = kwargs.get("key", None)
    # print(key)

    # if kwargs is None:
    #     sort_me = args.sort(key=type(args[0]))
    # else:
    #     sort_me = args.sort(kwargs)
    #
    # print(sort_me)
    # if type(args[0]) is list or type(args[0]) is dict or type(args[0]) is str:
    #     iterable = args[0]
    #     for x in range(0, len(iterable)):
    #         print(iterable[x])

    # maxVal = args[0]
    # for x in range(1, len(args)):
    #     if maxVal < args[x]: maxVal = args[x]
    #
    # return maxVal


print(max(3, 2)) # == 3
print(min(3, 2)) # == 2
print(max([1, 2, 0, 3, 4])) # == 4
print(min("hello")) # == "e"
print(max(2.2, 5.6, 5.9, key=int)) # == 5.6
print(min([[1,2], [3, 4], [9, 0]], key=lambda x: x[1])) # == [9, 0]
