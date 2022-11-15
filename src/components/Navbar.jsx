import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>  <a href="http://localhost:3000/"> Fitness Tracker </a> </h2>
       

        <div id="navigation">
          <NavLink to="register"> <button> Login/SignUp </button> </NavLink>
          <NavLink to="activities" className="routes">Activities </NavLink>
          <NavLink to="routines" className="routes"> Routines  </NavLink>
          <NavLink to="MyRoutines" className="routes">My Routines </NavLink>

        </div>
        
    
  </div>
  );
};

export default Navbar;