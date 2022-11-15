import React, {useState} from 'react';
import {useNavigate, NavLink} from 'react-router-dom'
import {registerNewUser} from '../api'



const Register = ({setUserToken}) => {
const [formData, setFormData] = useState({username: "", password: ""})

const navigate = useNavigate()

async function registerUser(event) {
    event.preventDefault()
    const username = formData.username
    const password = formData.password
    
    const user = await registerNewUser(username, password)

 
    const token = user.token
    setUserToken(token)
    localStorage.removeItem("token")
    localStorage.setItem("token", token)
    navigate("/MyRoutines")
  }

return (
    <div className="Registration" onSubmit={registerUser}>
        <h1> SIGN UP!</h1>
            <form className="RegistrationForm" >
                <label htmlFor="username">
                    Create a Username <br/>
                    <input onChange={(e) => setFormData({...formData, username: e.target.value})} value={formData.username}type="text" name="username" />
                </label>
                <label htmlFor="password">
                    Create a Password <br/>
                    <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
                <label htmlFor="login">
                    <NavLink to="login" className="login"> Already registered? Sign in! </NavLink>
                </label>
            </form>
        </div>
    );

}




export default Register




