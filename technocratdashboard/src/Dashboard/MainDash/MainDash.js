import React from "react";
import Cards from "../Cards/Cards";
import { Clients } from "../ClientsList";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Clients />
    </div>
  );
};

export default MainDash;