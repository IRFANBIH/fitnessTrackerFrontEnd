import React from "react"
import { Navbar, Routines, Activities } from "./"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Main = () => {
  return (
    <BrowserRouter>
      <div id="Home">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Routines />} />
          <Route exact path="/activities" element={<Activities/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main
