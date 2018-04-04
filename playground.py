# coding: utf-8

#20180403
#DATE AND TIME CONVERTER https://py.checkio.org/en/mission/date-and-time-convertor/
# Computer date and time format consists only of numbers, for example: 21.05.2018 16:30
# Humans prefer to see something like this: 21 May 2018 year, 16 hours 30 minutes
# Your task is simple - convert the input date and time from computer format into a "human" format.
# Input: Date and time as a string
# Output: The same date and time, but in a more readable format
#
# Example:
# date_time("01.01.2000 00:00") == "1 January 2000 year 0 hours 0 minutes"
# date_time("19.09.2999 01:59") == "19 September 2999 year 1 hour 59 minutes"
# date_time("21.10.1999 18:01") == "21 October 1999 year 18 hours 1 minute"
# note: words "hour" and "minute" are used only when time is 01:mm (1 hour) or hh:01 (1 minute).
# In other cases it should be used "hours" and "minutes".

import datetime

def date_time(str):
    hours = "hours"
    minutes = "minutes"
    first_list = str.split(".")
    second_list = first_list[-1].split(" ")

    print(first_list)
    first_list.remove(first_list[-1])
    first_list.extend(second_list)
    second_list = first_list[-1].split(":")
    first_list.remove(first_list[-1])
    first_list.extend(second_list)

    for i in range(0, len(first_list)):
        first_list[i] = int(first_list[i])

    if first_list[3] == 1:
        hours = "hour"

    if first_list[4] == 1:
        minutes = "minute"

    return(datetime.datetime(first_list[2], first_list[1], first_list[0], first_list[3], first_list[4]).strftime("%-d %B %Y year %-H {} %-M {}".format(hours, minutes)))








print(datetime.datetime(2017, 5, 3, 15, 40).strftime("%-d %B %Y year %-H hours %-M minutes"))
