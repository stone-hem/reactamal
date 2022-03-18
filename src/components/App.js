import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Newprojects from "./Newprojects";
import Activeprojects from "./Activeprojects";
import Myshares from "./Myshares";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='root'>
<div className='.navbar-expand{-sm|-md|-lg|-xl}' style={{ padding:"30px"}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/newprojetcs' element={<Newprojects />} />
          <Route path='/activeprojects' element={<Activeprojects />} />
          <Route path='/myshares' element={<Myshares />} />
        </Routes>
        {/* <Header/>
      <Home/>
      <Login/>
      <Register/>
      <Newprojects/>
     <Activeprojects/>
     <Myshares/> */}
      </BrowserRouter>
      </div>
    </div>


  );
}

export default App;
