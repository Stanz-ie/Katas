export const summation = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum
}

console.log(summation(8));

/*
Pas besoin d'un tableau dans ce cas là, on fait une simple boucle 
qui prend au départ la valeur initiale (1) jusqu'à en l'incluant,
le nombre entré en paramètre et on aditionne tout ça.
Donc ici, i n'est pas l'index du tableau mais la valeur de départ
*/