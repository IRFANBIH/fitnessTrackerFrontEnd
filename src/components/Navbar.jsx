import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = ({ userToken, setUserToken }) => {
  const navigate = useNavigate()
  return (
    <div id="navbar">
      <h2 id="fitnessTracker"> Fitness Tracker</h2>
      {userToken ? (
        <div>
          <button
            onClick={() => {
              setUserToken(null)
              localStorage.removeItem("token")
              localStorage.removeItem("username")
              localStorage.removeItem("userId")
              navigate("/")
            }}>
            {" "}
            Log out{" "}
          </button>
          <NavLink to="/" className="routes">
            Home{" "}
          </NavLink>
          <NavLink to="MyRoutines" className="routes">
            My Routines{" "}
          </NavLink>
          <NavLink to="activities" className="routes">
            Activities{" "}
          </NavLink>
          <NavLink to="routines" className="routes">
            {" "}
            Routines{" "}
          </NavLink>
        </div>
      ) : (
        <div id="navigation">
          <NavLink to="login">
            {" "}
            <button> Login/SignUp </button>{" "}
          </NavLink>
          <NavLink to="/" className="routes">
            Home{" "}
          </NavLink>
          <NavLink to="activities" className="routes">
            Activities{" "}
          </NavLink>
          <NavLink to="routines" className="routes">
            {" "}
            Routines{" "}
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
