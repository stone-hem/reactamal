import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Newprojects from "./Newprojects";
import Activeprojects from "./Activeprojects";
import Myshares from "./Myshares";
import Protected from './Protected';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='root'>
<div className='.navbar-expand{-sm|-md|-lg|-xl}' style={{ padding:"30px"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Protected Cmp={Home} />} />
          <Route path='/newprojetcs' element={<Protected Cmp={Newprojects}/>} />
          <Route path='/activeprojects' element={<Protected Cmp={Activeprojects}/>} />
          <Route path='/myshares' element={<Protected Cmp={Myshares}/>} />
        </Routes>

      </BrowserRouter>
      </div>
    </div>


  );
}

export default App;
