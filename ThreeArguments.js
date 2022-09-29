function addName(StolenItem, Name , Price){
    StolenItem[Name] = Price
    return StolenItem;
}
console.log(addName({}, "Brutus", 300))
console.log( addName({piano : 500}, "Brutus",400))