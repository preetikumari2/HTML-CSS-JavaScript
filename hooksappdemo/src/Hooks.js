//import React, {useState, useEffect, useRef} from 'react'

//useState
// const Hooks = () =>{
//     const [counter, setCounter] = useState(0)
//     function increaseCounter(){
//         setCounter(counter + 1);
//     }
//     function decreaseCounter(){
//         setCounter(counter - 1);
//     }
// return (
//     <div>
//         <h1>Counter: {counter}</h1>
//         <button onClick = {increaseCounter}> increased</button>
//         <button onClick = {decreaseCounter}> decreased</button>
//     </div>
// )
// }
// export default Hooks



// const Hooks = () =>{
//     const [counter, setCounter] = useState(0)
//     const [name, setName] = useState("")
//     function increaseCounter(){
//         setCounter(counter + 1);
//     }
//     function decreaseCounter(){
//         setCounter(counter - 1);
//     }
// return (
//     <div>
//         <input type="text" onChange={e=> setName(e.target.value)} />
//         <h1> {name}has clicked {counter} times</h1>
//         <button onClick = {increaseCounter}> increased</button>
//         <button onClick = {decreaseCounter}> decreased</button>
//     </div>
// )
// }
// export default Hooks


//useState with object
// const Hooks = () =>{
//     const [details, setDetails]=useState({counter:0,name:""});
//     function increaseCounter(){
//         setDetails((prev)=>({
//             ...prev,
//             counter:prev.counter+1
//         }));
//     }
//     function decreaseCounter(){
//         setDetails((prev)=>({
//             ...prev,
//             counter:prev.counter-1
//         }));
//     }
//     return (
//         <div>
//             <h1>has clicked {details.counter} times</h1>
//             <button onClick = {increaseCounter}> increased</button>
//             <button onClick = {decreaseCounter}> decreased</button>
//         </div>
//     )
// }
// export default Hooks


//useEffect without dependency
// const Hooks = () =>{
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//         document.title = counter + " times clicked"
//     })
//     function increaseCounter(){
//         setCounter(counter + 1);
//     }
//     function decreaseCounter(){
//         setCounter(counter -1);
//     }
//     return(
//         <div>
//           <h1>Counter: {counter}</h1>
//           <button onClick = {increaseCounter}> increased</button>
//           <button onClick = {decreaseCounter}> decreased</button>
//         </div>  
//     )
// }
// export default Hooks


//useEffect with a empty array
// const Hooks = () =>{
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//         document.title = counter + " times clicked"
//     },[]);
//     function increaseCounter(){
//         setCounter(counter + 1);
//     }
//     function decreaseCounter(){
//         setCounter(counter -1);
//     }
//     return(
//         <div>
//           <h1>Counter: {counter}</h1>
//           <button onClick = {increaseCounter}> increased</button>
//           <button onClick = {decreaseCounter}> decreased</button>
//         </div>  
//     )
// }
// export default Hooks


//useEffects with variables
// const Hooks = () =>{
//     const [counter, setCounter] = useState(0);
//     const [countByTen, setCountByTen] = useState(10);
//     useEffect(() => {
//         document.title = countByTen + " times clicked"
//     },[countByTen]);
//     function increaseCounter(){
//         setCounter(counter + 1);
//     }
//     function decreaseCounter(){
//         setCounter(counter -1);
//     }
//     return(
//         <div>
//           <h1>Counter: {counter}</h1>
//           <button onClick = {increaseCounter}> increased</button>
//           <button onClick = {decreaseCounter}> decreased</button>
//           <h1>Count By Ten : {countByTen}</h1>
//           <button onClick={() => setCountByTen(countByTen + 10)}> count increased by 10</button>
//         </div>  
//     )
// }
// export default Hooks


import React, {createContext} from "react"
import MainComponent from './MainComponent'
export const GreetContext = createContext();
//useContext
const Hooks = () =>{
    return(
        <GreetContext.Provider value = {"Hi, Good AfterNoon Preethi"}>
            <div>
                <MainComponent></MainComponent>
            </div>
        </GreetContext.Provider>
    )
}
export default Hooks