import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login === "true"){
            navigate("/")
        }
    })
    return(
        <div className="logincontent">
            <div className="container">
            <label>Username:
                <br/>
                <input type="text"/>
            </label>
            <br></br>
            <label>password:
                <br/>
                <input type="text"/>
            </label><br></br>

            <button onClick={login}>Login</button>
            </div>
        </div>
    )
}