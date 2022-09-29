function countBoomerangs(array)
{
    let totalNumber = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] == array[i-2] && array[i] !== array[i-1]){
			totalNumber++;
		}
    }

    return totalNumber;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))