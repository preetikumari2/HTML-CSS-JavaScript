const isPalindrome = (num) => {
    let number = num;
	let rev = 0;
	while(num !== 0){
	    rev = (rev * 10) + (num % 10);
		num = parseInt(num / 10);
	}
   if(number === rev){
		return "The Number " + rev + "is palindrome";
	}
	else{
		return "The Number " + rev + "is palindrome";
	}
}
console.log(isPalindrome(121));