import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from 'react'
import Clients from './ClientsList';
import Protected from "./Protected";
// import Product from "./Product";
// import Sales from "./Sales";
import Cards from "./Cards/Cards";
import MainDash from "./MainDash/MainDash";
import Sidebar from "./Sidebar/Sidebar";
import RightSide from "./RightSide/RightSide";



function Home() {
    const handleClick = () =>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div >
            <div className="navbar">
        <Router>
          <nav >
            <Link to="/ClientsList">Client</Link>
            <Link to="/MainDash">Product</Link>
            <Link to="/Cards">Sales</Link>
          </nav>
          <Routes>
            <Route path="Clients" element={<Protected Compenent = {Clients} />}/>
            <Route path="MainDash" element={<Protected Compenent = {MainDash} />}/>
            <Route path="Cards" element={<Protected Compenent = {Cards} />}/>
          </Routes>
        </Router>
      </div>
            {/* <h1>Dashboard</h1> */}
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home
