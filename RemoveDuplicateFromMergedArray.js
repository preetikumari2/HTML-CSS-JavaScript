function removeDuplicate(array1, array2){
    let array = [...array1, ...array2]
    let newArray = [...new Set(array)]
    console.log(newArray.sort())
}
const array1 = [1, 3, 4]
const array2 = [2, 3, 5]
removeDuplicate(array1, array2)