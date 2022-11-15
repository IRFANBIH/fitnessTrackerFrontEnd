import React from "react";
import {NavLink, useNavigate} from "react-router-dom"


const Navbar = ({userToken, setUserToken}) => {
  const navigate = useNavigate()
  return (
    <div id="navbar">
        <h2 id='fitnessTracker'>  <a href="http://localhost:3000/"> Fitness Tracker </a> </h2>
        {userToken ? (
          <div>
            <button onClick={()=>{
              setUserToken(null)
              localStorage.removeItem("token")
              navigate('/')
            }}> Log out </button>
            <NavLink to="MyRoutines" className="routes">My Routines </NavLink>
            <NavLink to="CreateRoutine" className="routes"> Create a Routine </NavLink>
            <NavLink to="activities" className="routes">Activities </NavLink>
          <NavLink to="routines" className="routes"> Routines  </NavLink>
          </div>):
          (
        <div id="navigation">
          
          <NavLink to="login"> <button> Login/SignUp </button> </NavLink>
          <NavLink to="activities" className="routes">Activities </NavLink>
          <NavLink to="routines" className="routes"> Routines  </NavLink>

        </div>)

          }
       

        
    
  </div>
  );
};

export default Navbar;