function possibleBonus(a, b)
{
    let player1 = a
    let player2 = b
    for(let i = 1; i <= 6; i++){
        player1 = player1 + 1
        if(player1 == player2){
            return true
        }
    }
    return false
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(5, 3))
console.log(possibleBonus(1, 9))