// Une fonction qui retourne heure, minutes et secondes en millisecondes
const past = (h,m,s) => {
    let hToMil = 3600000 * h
    let minToMil = 60000 * m
    let secToMil = 1000 * s
    let sum = hToMil + minToMil + secToMil

    return sum
    
};

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));