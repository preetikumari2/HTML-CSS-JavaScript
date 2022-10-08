// import React, {useState, useEffect } from "react";
// import image1 from './Laptop.jpg'
// import image2 from './TV.jpg'
// import image3 from './Mobile.jpg'
// //import image4 from './Camera.jpg'
// //import image5 from './headphone.jpg'
// //import image6 from './SmartWatch.jpg'
// import './App.css';



// const ShoppingItem = () => {
//   return(
//       <>
//       <div class="Cart-Container">
//           <div class="Header">
//               <h3 class="Heading">Electronics Items</h3>
//               <h5 class="Action">Remove all</h5>
//           </div>
//           <div class="Cart-Items">
//               <div class="image-box">
//                   <img src={image1} alt=""/>
//               </div>
//               <div class="about">
//                 <h1 class="title">Laptop</h1>
//                 <h3 class="subtitle">10 Available</h3>
//               </div>
//               <div class="counter">
//                 <button class="btn" id="Click()">+</button>
//                 <div class="count">2</div>
//                 <button class="btn" id="Click()">-</button>
//               </div>
//               <div class="price">
//                 <div class="amount">Rs. 49999</div>
//                 <div class="remove"><u>Remove</u></div>
//               </div>
//             </div>
//             <div class="Cart-Items">
//               <div class="image-box" id="image2">
//                   <img src={image2} alt=""/>
//               </div>
//               <div class="about">
//                 <h1 class="title">TV</h1>
//                 <h3 class="subtitle">5 Available</h3>
//               </div>
//               <div class="counter">
//                 <button class="btn" id="Click()">+</button>
//                 <div class="count">1</div>
//                 <button class="btn" id="Click()">-</button>
//               </div>
//               <div class="price">
//                 <div class="amount">Rs. 20999</div>
//                 <div class="remove"><u>Remove</u></div>
//               </div>
//             </div>
//             <div class="Cart-Items">
//               <div class="image-box"  id="image3">
//                   <img src={image3} alt=""/>
//               </div>
//               <div class="about">
//                 <h1 class="title">Mobile</h1>
//                 <h3 class="subtitle">8 Available</h3>
//               </div>
//               <div class="counter">
//                 <button class="btn" id="Click()">+</button>
//                 <div class="count">1</div>
//                 <button class="btn" id="Click()">-</button>
//               </div>
//               <div class="price">
//                 <div class="amount">Rs. 19999</div>
//                 <div class="remove"><u>Remove</u></div>
//               </div>
//             </div>     
//       </div>
//       </>
//   )
//   }
//   const ShopClick = () =>{
//   const [btn, Click] = useState(0);
//      useEffect(() => {
//           document.title = btn + ""
//       },[]);
//       function increaseCount(){
//           Click(btn + 1);
//       }
//       function decreaseCount(){
//           Click(btn -1);
//       }
//       return(
//           <div>
//             <h1>{btn}</h1>
//             <button onClick = {increaseCount}> +</button>
//             <button onClick = {decreaseCount}> -</button>
//           </div>  
//       )
//   }

// function App() {
  
//   return (
//     <div className="App">
//      <ShoppingItem />
//      <ShopClick />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import data from './components/back/Data/Data.js';
import Header from './components/front/Header/Header.js';
import Routes from './components/front/Routes/Routes.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App  () {
  const {productItems} = data;
  return (
    <div>
      <Router>
        <Header />
        <Routes productItems={productItems} />
      </Router>  
     
    </div>
  )
};

export default App;
