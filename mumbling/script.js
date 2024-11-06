const addLetter = (letter, index) => letter.repeat(index +1);

let s = "abcd";
arr = s.split('');

const incrementedArr = arr.map(addLetter);
console.log(incrementedArr);


//console.log(arr);
//let upperArr = [];

/*
for (i = 0; i< arr.length; i++){
    
    upperArr += arr[i].toUpperCase()
    
    
}
//console.log(upperArr);
*/

//let incrementedArr = [];

/*
const addLetter = (letter) => {
    for (let i = 0; i < arr.length; i++) {   
       incrementedArr.push(arr[i] += letter)
    }

    return incrementedArr;
};
*/

//console.log(addLetter(arr));

//console.log(arr.map(addLetter));
/*
const accum = (s) => {
    arr = s.split('')
    for (i = 0; i< arr.length; i++){
        return arr[i].toUpperCase()
    }

}
*/



