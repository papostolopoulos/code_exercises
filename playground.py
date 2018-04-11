# coding: utf-8

# 20180410
# PAWN BROTHERHOOD https://py.checkio.org/en/mission/pawn-brotherhood/
# Almost everyone in the world knows about the ancient game Chess and has
# at least a basic understanding of its rules.
# It has various units with a wide range of movement patterns allowing for
# a huge number of possible different game positions
# (for example Number of possible chess games at the end of the n-th plies.)
# For this mission, we will examine the movements and behavior of chess pawns.
#
# Chess is a two-player strategy game played on a checkered game board laid out
# in eight rows (called ranks and denoted with numbers 1 to 8) and eight columns
# (called files and denoted with letters a to h) of squares. Each square of the
# chessboard is identified by a unique coordinate pair — a letter and a number
# (ex, "a1", "h8", "d6"). For this mission we only need to concern
# ourselves with pawns. A pawn may capture an opponent's piece on a square
# diagonally in front of it on an adjacent file, by moving to that square.
# For white pawns the front squares are squares with greater row than their.
#
# A pawn is generally a weak unit, but we have 8 of them which we can use to
# build a pawn defense wall. With this strategy, one pawn defends the others.
# A pawn is safe if another pawn can capture a unit on that square. We have
# several white pawns on the chess board and only white pawns.
# You should design your code to find how many pawns are safe.
#
# You are given a set of square coordinates where we have placed white pawns.
# You should count how many pawns are safe.
#
# Input: Placed pawns coordinates as a set of strings.
# Output: The number of safe pawns as a integer.
#
# Example:
# safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"}) == 6
# safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"}) == 1

def safe_pawns(a_set):
    columns = "abcdefgh"
    ranks = "12345678"
    counter = 0
    for x in a_set:
        try:
            back_left = columns[columns.find(x[0]) - 1] + ranks[ranks.find(x[1]) - 1]
            back_right = columns[columns.find(x[0]) + 1] + ranks[ranks.find(x[1]) - 1]
        except IndexError:
            continue;
        if back_left in a_set or back_right in a_set:
            counter += 1

    return counter

# print(safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"})) # == 6
# print(safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"})) # == 1
print(safe_pawns(["a1","b2","c3","d4","e5","f6","g7","h8"]))
safe_pawns(["a1","a2","a3","a4","h1","h2","h3","h4"])
