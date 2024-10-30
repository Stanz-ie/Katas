def is_isogram(string):
    string = string.lower()
    for char in string:
        if string.count(char) > 1:
            return False
    return True


   
print(is_isogram("lumberjack"))
print (is_isogram("environment"))
print (is_isogram(" "))
print (is_isogram("moOse"))
