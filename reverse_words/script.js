let strTest = 'The quick brown fox jumps over the lazy dog.'
const reverseWords = (str) => {
   let arr = str.split('');
   let reverseArr = [];

 for(let i = arr.length -1; i >= 0; i --) {
   reverseArr.push(arr[i]);
   
 }
 return reverseArr.join('').split(' ').reverse().join(' ')
}

console.log(reverseWords(strTest));
 

 
 


