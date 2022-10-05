import React from "react";
import "./index.css"
import "./App.css"
const isPalindrome = (num) =>{
    let number = num;
	let rev = 0;
	while(num !== 0){
	    rev = (rev * 10) + (num % 10);
		num = parseInt(num / 10);
	}
   if(number === rev){
		return "The Number " + rev + " is palindrome";
	}
	else{
		return "The Number " + rev + " is not palindrome";
	}
} 



//user
const user = {
	name : "Preethi",
	clgname : "VVIT",
	degree : "B.E"
}


//Functions
const Student = () => {
	return(
		<>
		<h1>Name: {user.name}</h1>
		<h2>collage:{user.clgname}</h2>
		<h3>degree:{user.degree}</h3>
		</>
	)
}



// Using Props
const Student1 = (props) => {
	return(
		<>
		<h1>Name: {props.name}</h1>
		<h2>collage:{props.clgname}</h2>
		<h3>degree:{props.degree}</h3>
		</>
	)
} 


//prop distructor
const Student2 = ({name, clgname, degree}) => {
	return(
		<>
		<h1>Name: {name}</h1>
		<h2>collage:{clgname}</h2>
		<h3>degree:{degree}</h3>
		</>
	)
} 


//class based function
class Student3 extends React.Component{
	render(){
		return(
			<>
		    <h1>Name: Preethi</h1>
		    <h2>collage: VVIT</h2>
		    <h3>degree: BE</h3>
			</>
		)
	}
}



function App() {

    return(
		// <div>
		// 	{isPalindrome(121)};
    	// </div>  
    
		
	 <div className="App">
	 	<Student1 name = "Preethi" clgname = "VVIT" degree = "B.E"/>
	 	<Student1 name = "Reethi" clgname = "SVIT" degree = "B.tech"/>
	 </div>  

    // <div className="App">
	// 	<Student/>
	// </div> 
	
	
    );    

}

export default App;
