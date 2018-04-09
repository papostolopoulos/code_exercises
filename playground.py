# coding: utf-8

# 20180408
# MONKEY TYPING https://py.checkio.org/en/mission/monkey-typing/
# Let's suppose our monkeys are typing, typing and typing,
# and have produced a wide variety of short text segments.
# Let's try to check them for sensible word inclusions.
#
# You are given some text potentially including sensible words.
# You should count how many words are included in the given text.
# A word should be whole and may be a part of other word.
# Text letter case does not matter. Words are given in lowercase and don't repeat.
# If a word appears several times in the text, it should be counted only once.
#
# For example, text - "How aresjfhdskfhskd you?", words - ("how", "are", "you", "hello").
# The result will be 3.
#
# Input: Two arguments. A text as a string (unicode for py2)
# and words as a set of strings (unicode for py2).
# Output: The number of words in the text as an integer.
#
# Example:
# count_words("How aresjfhdskfhskd you?", {"how", "are", "you", "hello"}) == 3
# count_words("Bananas, give me bananas!!!", {"banana", "bananas"}) == 2
# count_words("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
#             {"sum", "hamlet", "infinity", "anything"}) == 1

def count_words(str, set):
    counter = 0
    for x in set:
        if x in str.lower():
            counter += 1

    return counter


print(count_words("How aresjfhdskfhskd you?", {"how", "are", "you", "hello"})) # == 3
print(count_words("Bananas, give me bananas!!!", {"banana", "bananas"})) # == 2
print(count_words("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            {"sum", "hamlet", "infinity", "anything"})) # == 1
