let arrTest = [0, 3, 4, 5];

export const squareSum = (arr) => {

let sum = 0;

for (let i = 0;  i < arr.length; i ++) {
 sum += arr[i] * arr[i]
 
}

return sum
   
}

console.log(squareSum(arrTest));
    

