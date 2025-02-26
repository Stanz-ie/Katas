def descending_order(num):
    number_list = list(str(num))
    for digit in number_list:
        number_list.sort(reverse=True)
    return int(''.join(number_list))

print(descending_order(42145))
