import React from 'react';
import {useNavigate} from 'react-router-dom'
import {registerNewUser} from '../api'



const Register = ({setUserToken}) => {

const navigate = useNavigate()

async function registerUser(event) {
    event.preventDefault()
    const username =event.target[0].value
    const password = event.target[1].value
    
    const user = await registerNewUser(username, password)
    console.log('is my user working?', user)
 
    const token = user.token
    setUserToken(token)
    localStorage.removeItem("token")
    localStorage.setItem("token", token)
    navigate("/MyRoutines")
  }

return (
    <div className="RegistrationForm" onSubmit={registerUser}>
            <form>
                <label htmlFor="username">
                    Username:
                    <input type="text" name="username" />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}








export default Register
