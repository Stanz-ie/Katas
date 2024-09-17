const removeChar = (str) => {

    newString = str.split('');
    let removeString = [];

    for (let i = 1; i < newString.length -1; i++) {
        
        removeString.push(newString[i]);
    }
    return removeString.join('')
}

let stringTest = "eloquent";

console.log(removeChar(stringTest));





/*function removeCharacter() {
    let originalString = "GeeksForGeeks";
    newString = originalString.replace("G", "");
    console.log(newString);
}

removeCharacter();
*/