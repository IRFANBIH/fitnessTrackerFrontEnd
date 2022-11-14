import React from "react";
import {Navbar, Routines} from './';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  
  
  
  
  
  return (
    <BrowserRouter>
    <div id="Home">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Routines/>}></Route>
      </Routes>
    
  </div>
  </BrowserRouter>
  );
};

export default Main;
