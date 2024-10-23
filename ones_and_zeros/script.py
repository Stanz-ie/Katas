def binary_array_to_number(arr):

    # convertir une liste int en str
    arr_to_str = "".join(map(str,arr))
    int_value = int(arr_to_str, 2)
    return (int_value)
   


#print(binary_array_to_number([0, 0, 0, 1]))