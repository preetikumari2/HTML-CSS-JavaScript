import React,{useContext} from "react"
import {GreetContext} from './Hooks'
const GreetComponent = () => {
    const hello = useContext(GreetContext);
    console.log(hello);
    return(
        <h1>
            Hi, from Greet Component which is a child of Main Component
        </h1>
    )
    
}
export default GreetComponent