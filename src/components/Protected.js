

import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Header from './Header';




function Protected(props) {
    const history=useNavigate()
let Cmp=props.Cmp
useEffect(()=>{
    if ( !localStorage.getItem('user')) {
      console.log('got it');
      history('/login')
    }
  },[])
  return (
    <div>
        <Cmp/>
    </div>
  );
}

export default Protected;
