import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from 'react'
import ClientsList from './ClientsList';
import Protected from "./Protected";
import Product from "./Product";
import Sales from "./Sales";



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
            <Link to="/Product">Product</Link>
            <Link to="/Sales">Sales</Link>
          </nav>
          <Routes>
            <Route path="ClientsList" element={<Protected Compenent = {ClientsList} />}/>
            <Route path="Product" element={<Protected Compenent = {Product} />}/>
            <Route path="Sales" element={<Protected Compenent = {Sales} />}/>
          </Routes>
        </Router>
      </div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home
