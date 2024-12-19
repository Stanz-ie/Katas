def fizzbuzz(n):
    numbers = []
    for number in range (1, n+1):
        if number % 3 == 0 and number % 5 == 0:
            numbers.append("FizzBuzz")
            #print("Fizzbuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
            #print("Fizz")            
        elif number % 5 == 0:            
            numbers.append("Buzz")
            #print("Buzz")
        else:
            numbers.append(number)
            #print(number)
    return numbers
            
print(fizzbuzz(10))

# attention à l'ordre des conditions, c'est important
# print affiche  None par défaut (ça peut fausser le résultat attendu)

