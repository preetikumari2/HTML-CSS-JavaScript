import React, { useRef } from 'react'
//import MainDash from '../Dashboard/MainDash/MainDash';
import Home from '../Dashboard/Home';
import './Login.css'

function Login() {
    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailAs");
    const getpassword = localStorage.getItem("passwordAs");

    const handleSubmit = () =>{
        if(email.current.value === "Anuj.Bajaj@technocrat.com" && password.current.value === "Tech@123"){
            localStorage.setItem("emailAs","Anuj.Bajaj@technocrat.com");
            localStorage.setItem("passwordAs","Tech@123");
        }
    }
    return (
        
        <div className='log'>
            { 
            getEmail && getpassword ? <Home /> :
            <form onSubmit={handleSubmit} >
                <div className='mail'>
                    <input type="text" ref={email} placeholder='Enter Email'/>
                </div>
                <div className='mail'>
                    <input type="password" ref={password} placeholder='Enter Password'/>
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    )
}

export default Login
