# coding: utf-8

# 20180323
# BIGGER PRICE https://py.checkio.org/mission/bigger-price/
# You have a table with all available goods in the store.
# The data is represented as a list of dicts
# Your mission here is to find the TOP most expensive goods.
# The amount we are looking for will be given as a first argument and the whole data as the second one
#
# Input: int and list of dicts. Each dicts has two keys "name" and "price"
# Output: the same as the second Input argument.
#
# Example:
# bigger_price(2, [
#     {"name": "bread", "price": 100},
#     {"name": "wine", "price": 138},
#     {"name": "meat", "price": 15},
#     {"name": "water", "price": 1}
# ]) == [
#     {"name": "wine", "price": 138},
#     {"name": "bread", "price": 100}
# ]
#
# bigger_price(1, [
#     {"name": "pen", "price": 5},
#     {"name": "whiteboard", "price": 170}
# ]) == [{"name": "whiteboard", "price": 170}]

def bigger_price(num, lst):
    number_list = []
    final_result = []

    for x in range(0, len(lst)):
        number_list.append(lst[x]["price"])

    print number_list
    number_list = sorted(number_list, reverse=True)[0:num]
    print(number_list)

    for y in number_list:
        for z in range(0, len(lst)):
            if lst[z]["price"] == y:
                final_result.append(lst[z])
                break

    return final_result



print(bigger_price(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))
#     == [
#     {"name": "wine", "price": 138},
#     {"name": "bread", "price": 100}
# ]
