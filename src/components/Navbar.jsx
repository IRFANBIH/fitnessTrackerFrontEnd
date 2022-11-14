import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div id="navbar">
        <h2> Welcome to Fitness Tracker</h2>

        <div id="navigation">
          <NavLink to="login"> <button> Login/SignUp </button> </NavLink>
          <NavLink to="activities"><button> Activities </button> </NavLink>
          <NavLink to="routines"> <button> Routines </button>  </NavLink>
          <NavLink to="MyRoutines"><button> My Routines </button> </NavLink>

        </div>
        
    
  </div>
  );
};

export default Navbar;