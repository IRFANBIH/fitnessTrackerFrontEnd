import React, { useState, useEffect } from "react"
import { Navbar, Routines, Activities, MyRoutines, Register, Login, CreateRoutine, Home, EditRoutine, AddRoutineActivity  } from "./"
import { getAllPublicRoutines, getUserData, getAllActivities, getUserRoutines} from "../api"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([])
  const [allActivities, setAllActivities] = useState([])
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState({})
  const [editRoutine, setEditRoutine] = useState({})


  useEffect(() => {
    const localToken = localStorage.getItem("token")
    if (localToken) {
      setUserToken(localToken)
    }
    const username =localStorage.getItem("username")
    const id = localStorage.getItem("userId")
    if(username) {
      setUserData({id, username})
    }

  }, [])

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    async function getData() {
      const userInformation = await getUserData(localToken)
      setUserData(userInformation)
 
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


  useEffect(() => {
  async function getActivities() {
    const publicActivities = await getAllActivities()
    setAllActivities(publicActivities) 
  }
  getActivities()
},[])



  return (
    <BrowserRouter>
      <div id="Home">
        <Navbar userToken={userToken} setUserToken={setUserToken} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/routines" element={<Routines setEditRoutine={setEditRoutine} allRoutines={allRoutines} userData={userData} userToken={userToken}/>} />
          <Route path="/register" element={<Register setUserToken={setUserToken} />} />
          <Route path="/login" element={<Login setUserToken={setUserToken} userData={userData}/>} />
          <Route path="/activities" element={<Activities setAllActivities={setAllActivities} allActivities={allActivities}/>} />
          <Route
            path="/myRoutines"
            element={<MyRoutines setEditRoutine={setEditRoutine} setAllRoutines={setAllRoutines} userToken={userToken} userData={userData} />}
          />
          <Route path="/createRoutine" element={<CreateRoutine allActivities={allActivities} userToken={userToken} />} />
          <Route path="/routines/:routineId/activities" element={<AddRoutineActivity  userToken={userToken} allActivities={allActivities}/>}/>
          <Route path="/routines/:routineId" element={<EditRoutine userData={userData} editRoutine={editRoutine} userToken={userToken} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main
