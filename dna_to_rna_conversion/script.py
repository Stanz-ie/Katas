dna = "GCACG"
         
def dna_to_rna(dna):
    rna = dna
    for char in dna:
        if char == "T":
            rna = rna.replace("T", "U")
    return rna

print (dna_to_rna(dna))

'''
il vaut mieux mettre rna = rna.replace que dna.replace ça garantit que seules les occurences
de T seront remplacées dans rna et si dna ne contient pas de T, elle sera affichée 
sans altération puisqu'elle conservera sa valeur de dna (on ne rentre pas dans la boucle, pas de T)       

'''
    




