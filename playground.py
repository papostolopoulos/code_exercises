# 20171119
# BETWEEN MARKERS https://py.checkio.org/mission/between-markers/
# You are given a string and two markers (the initial and final).
# You have to find a substring enclosed between these two markers. But there are a few important conditions:
#
# The initial and final markers are always different.
# The text must be found only between the first instances of the marker.
# If there is no initial marker then the beginning should be considered as the beginning of a string.
# If there is no final marker then the ending should be considered as the ending of a string.
# If the initial and final markers are missing then simply return the whole string.
# If the final marker is standing in front of the initial one then return an empty string.
# Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
#
# Output: A string.
#
# Example:
#
# between_markers('What is >apple<', '>', '<') == 'apple'
# between_markers('No[/b] hi', '[b]', '[/b]') == 'No'
# between_markers("No <hi>",">","<") == ""
#
# How it is used: for parsing texts
# Precondition: can't be more than one marker

def between_markers(str, m1, m2):
    if m1 in str and m2 in str:
        return str[str.index(m1) + 1: str.index(m2)]
    elif m1 in str:
        return str[str.index(m1) + 1:]
    elif m2 in str:
        return str[: str.index(m2)]
    else:
        return str



print(between_markers('What is >apple<', '>', '<'))
print(between_markers('No[/b] hi', '[b]', '[/b]'))
print(between_markers("No <hi>",">","<"))
