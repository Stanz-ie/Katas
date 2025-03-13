def remove_smallest(numbers):
    new_numbers = numbers[:]

    for value in new_numbers:
        smallest_value = min(new_numbers)
        new_numbers.remove(smallest_value)
        break
    return(new_numbers)

print(remove_smallest([]))