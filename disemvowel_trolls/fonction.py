def disemvowel(string):
    vowels = ["a", "e", "i", "o","u", "A", "E", "I", "O","U"]
    result = ""
    for character in string:
        if character not in vowels:
            result += character
    return result