function SetArray(Set){
    const array = Array.from(mySet)
    console.log(array)
}
let mySet = new Set()
mySet.add(5)
mySet.add(9)
SetArray(mySet)