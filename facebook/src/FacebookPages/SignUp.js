import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const SignUp = (props) => {
    const navigate = useNavigate();
    const signup=()=>{
        localStorage.setItem('signup',true)
        navigate('/')
    }
    useEffect(()=>{
        let signup = localStorage.getItem('signup')
        if(signup === "true"){
            navigate("/")
        }
    })
    return (
        <div>
        {/* // <div>
        //     Sign up page
        // </div> */}
        <h2>Signup Form</h2>
   
    
        <div class="container">
            <div>
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
            </div>
            <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            </div>
            <div>
            <label><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <div>
            </div>
            <input type="checkbox" checked="check" /> Remember me
            </div>
            <p>To create an account you have to agree our <a href="#">Terms & Privacy</a>.</p>
 
            <div class="clearfix">
                <button  onClick={signup}>Sign Up</button>
            </div>
        </div>
    
    </div>
    )
}
export default SignUp
