import React from "react";

const Login = () =>{


    return(
        <form className="Registration">
            <h1> LOGIN </h1>
            <div className="RegistrationForm">
            <label htmlFor="login"> Username </label>
            <input type="text" placeholder="Username" />
            <label htmlFor="login"> Password </label>
            <input type="text" placeholder="Password" />
            </div>
        </form>
    ) 
}








export default Login;