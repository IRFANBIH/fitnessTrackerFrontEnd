import React, { useState, useEffect } from "react"
import { Navbar, Routines, Activities, MyRoutines, Register, Login, CreateRoutine, Home } from "./"
import { getAllPublicRoutines, getUserData } from "../api"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([])
  const [allActivities, setAllActivities] = useState([])
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    if (localToken) {
      setUserToken(localToken)
    }
    const username =localStorage.getItem("username")
    if(username) {
      setUserData({username, ...userData})
    }
    const userId = localStorage.getItem("userId")
    if(userId) {
      setUserData({id, ...userData})
    }
    console.log(userId, 'is this working bro')
  }, [])

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    async function getData() {
      const userInformation = await getUserData(localToken)
      setUserData(userInformation)
      console.log(userInformation, "this is the data for me")
    }
    localToken && getData()
  }, [userToken])

  useEffect(() => {
    async function getPublicRoutines() {
      const publicRoutines = await getAllPublicRoutines()
      setAllRoutines(publicRoutines)
    }
    getPublicRoutines()
  }, [])

  return (
    <BrowserRouter>
      <div id="Home">
        <Navbar userToken={userToken} setUserToken={setUserToken} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/routines" element={<Routines allRoutines={allRoutines} />} />
          <Route path="/register" element={<Register setUserToken={setUserToken} />} />
          <Route path="/login" element={<Login setUserToken={setUserToken} userData={userData}/>} />
          <Route path="/activities" element={<Activities setAllActivities={setAllActivities} />} />
          <Route
            path="/myRoutines"
            element={<MyRoutines userToken={userToken} userData={userData} />}
          />
          <Route path="/createRoutine" element={<CreateRoutine userToken={userToken} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main
