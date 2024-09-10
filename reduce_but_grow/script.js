
const multiplyValuesOfIntegers = (arr) => {
    let product = 1
    for (element of arr){
        product *= element
    }
    return product
    }
    


console.log(multiplyValuesOfIntegers([1, 2, 3, 4]));