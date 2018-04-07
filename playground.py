# coding: utf-8

# 20180406
# THE MOST WANTED LETTER https://py.checkio.org/en/mission/most-wanted-letter/
# You are given a text, which contains different english letters and punctuation symbols.
# You should find the most frequent letter in the text.
# The letter returned must be in lower case.
# While checking for the most wanted letter, casing does not matter,
# so for the purpose of your search, "A" == "a".
# Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

# If you have two or more letters with the same frequency,
# then return the letter which comes first in the latin alphabet.
# For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
#
# Input: A text for analysis as a string.
# Output: The most frequent letter in lower case as a string.
#
# Example:
# checkio("Hello World!") == "l"
# checkio("How do you do?") == "o"
# checkio("One") == "e"
# checkio("Oops!") == "o"
# checkio("AAaooo!!!!") == "a"
# checkio("abe") == "a"

def most_wanted_letter(str):
    letter_dct = {}
    prevailing_letter = ' '
    occurences = 0


    def filter_punctuations(el):
        punctuations = "!?.,:;/- 0123456789"
        return False if el in punctuations else True

    filtered_str = "".join(list(filter(filter_punctuations, str))).lower()

    for x in filtered_str:
        try:
            letter_dct[x] += 1
        except KeyError:
            letter_dct[x] = 1

    for key in letter_dct:
        if letter_dct[key] > occurences:
            occurences = letter_dct[key]
            prevailing_letter = key

        if letter_dct[key] == occurences and key < prevailing_letter:
            prevailing_letter = key

    return prevailing_letter


print(most_wanted_letter("Hello World!")) # == "l"
print(most_wanted_letter("How do you do?")) # == "o"
print(most_wanted_letter("One")) # == "e"
print(most_wanted_letter("Oops!")) # == "o"
print(most_wanted_letter("AAaooo!!!!")) # == "a"
print(most_wanted_letter("abe")) # == "a"
