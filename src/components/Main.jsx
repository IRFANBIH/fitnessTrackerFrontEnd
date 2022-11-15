import React, {useState, useEffect} from "react"
import { Navbar, Routines, Activities, MyRoutines, SingleRoutine} from "./"
import { getAllPublicRoutines } from "../api"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Main = () => {

  const [allRoutines, setAllRoutines] = useState([])



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
        <Navbar />
        <Routes>
          <Route  path="/routines" element={<Routines allRoutines={allRoutines}/>} />
          <Route  path="/activities" element={<Activities/>} />
          <Route  path="/myRoutines" element={<MyRoutines/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main
