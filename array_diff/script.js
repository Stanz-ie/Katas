num=1
arrA=[1,2,3,6]
// => false
function existeIn(arr,n){
    for (let i= 0 ;  i<arr.length ; i++){
        if (arr[i] === n){
           return true
        }
    } return false
}
console.log(existeIn(arrA, num))
// n=1
// arr=[1,2,3,6]
// => true
// arrayA = [1, 2];
// arrayB = [1];
// arrayC = [];
// for (let i = 0; i < arrayA.length; i++) {
//     if ()
//   console.log(arrayA[i]);
// }
// for (let j=0 ; j<arrayB.length ; j++){
//     console.log(arrayB[j])
// }








