import React, {useState,} from "react";
import { loginUser } from "../api";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({setUserToken}) =>{
    const [formData, setFormData] = useState({username: "", password: ""})
    
    const navigate = useNavigate()
    
    async function loggedInUser(event) {
        event.preventDefault()
        const username = formData.username
        const password = formData.password
        
        const user = await loginUser(username, password)
    
     
        const token = user.token
        setUserToken(token)
        localStorage.removeItem("token")
        localStorage.setItem("token", token)
        navigate("/MyRoutines")}


    return(
        <div className="Registration" onSubmit={loggedInUser}>
        <h1> LOGIN!</h1>
            <form className="RegistrationForm" >
                <label htmlFor="username">
                    Username <br/>
                    <input onChange={(e) => setFormData({...formData, username: e.target.value})} value={formData.username}type="text" name="username" />
                </label>
                <label htmlFor="password">
                    Password <br/>
                    <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
                <label htmlFor="login">
                    <NavLink to="register" className="login"> Not registered? Sign up! </NavLink>
                </label>
            </form>
        </div>
    );
}







export default Login;