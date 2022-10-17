// // import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import './App.css';
// import Sidebar from './Dashboard/Sidebar/Sidebar';
// //import Login from './LoginForCEO/Login';
// //import Home from './Dashboard/Home';
// // import ClientsList from './Dashboard/ClientsList';
// // import Protected from "./Dashboard/Protected";
// // import Product from "./Dashboard/Product";
// // import Sales from "./Dashboard/Sales";


// function App() {

//   return (
//     <div className="App">
//       <div className='AppClass'>
//         <Sidebar />
//         <div></div>
//         <div></div>
//       </div>
//     {/* <Login/> */}
//     {/* <Home /> */}
//     </div>
//   );
// }


import './App.css'
import Login from './LoginForCEO/Login';
import Home from './Dashboard/Home';
import MainDash from './Dashboard/MainDash/MainDash';
import RightSide from './Dashboard/RightSide/RightSide';
import Sidebar from './Dashboard/Sidebar/Sidebar';
import Protected from './Dashboard/Protected';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Login />
        <Home />
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
