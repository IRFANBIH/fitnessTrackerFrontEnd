import React, {useState, useEffect} from "react"
import { Navbar, Routines, Activities, MyRoutines, Register, Login, CreateRoutine, Home} from "./"
import { getAllPublicRoutines } from "../api"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Main = () => {

  const [allRoutines, setAllRoutines] = useState([])
  const [allActivities, setAllActivities] = useState([])
  const [userToken, setUserToken] = useState(null)

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    setUserToken(localToken)
}, [])



useEffect(() => {
  async function getPublicRoutines() {
    const publicRoutines = await getAllPublicRoutines()
    setAllRoutines(publicRoutines)
  }
  getPublicRoutines()
}, []);



  return (
    <BrowserRouter>
      <div id="Home">
        <Navbar userToken={userToken} setUserToken={setUserToken} />
        <Routes>
          <Route  exact path="/" element={<Home />}/>
          <Route  path="/routines" element={<Routines allRoutines={allRoutines}/>} />
          <Route  path="/register" element={<Register setUserToken={setUserToken}/>} />
          <Route  path="/login" element={<Login setUserToken={setUserToken}/>} />
          <Route  path="/activities" element={<Activities setAllActivities={setAllActivities}/>}/>
          <Route  path="/myRoutines" element={<MyRoutines/>}/>
          <Route  path="/createRoutine" element={<CreateRoutine userToken={userToken}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main
