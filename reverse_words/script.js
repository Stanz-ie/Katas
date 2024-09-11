let strTest = 'The quick brown fox jumps over the lazy dog.'
const reverseWords = (str) => {
   let arr = str.split('');
   let newArr = [];

 for(let i = arr.length -1; i >= 0; i --) {
    newArr.push(arr[i]);
    //console.log(newArr);
    console.log(newArr.join());   
 }
 let lastArr = newArr.split(' ');
 console.log(lastArr);
 //return `"${newArr.join('')}"`;


}

console.log(reverseWords(strTest));
 

 
 


