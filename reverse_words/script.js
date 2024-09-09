let strTest = 'apple'
const reverseWords = (str) => {
   let arr = str.split('');
 //console.log(arr);

 for(let i = arr.length -1; i >= 0; i --) {
    let newArr = [];
    newArr.push(arr[i]);
    //console.log(newArr);
    //console.log(newArr.toString());   
 }
 return newArr.toString() 
}

console.log(reverseWords(strTest));
 

 
 


