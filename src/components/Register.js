import React, { useState,useEffect } from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone_number, setPhone] = useState("")
  const [name, setName] = useState("")
  const [password_confirmation, setPassword_confirmation] = useState("")
  const history=useNavigate()
  async function trysign() {
    let item = { email, phone_number, name, password,password_confirmation }
    console.log(item);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    console.log("result", result)
    history('/login')
  }
  useEffect(()=>{
    if ( localStorage.getItem('user')) {
      console.log('got it');
      history('/home')
    }
  },[])
  return (
    <div className='App' >
              <Header />
      <label>email</label><br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label>Phone Number</label><br />
      <input type="text" value={phone_number} onChange={(e) => setPhone(e.target.value)} /><br />
      <label>name</label><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <label>password confirmation</label><br />
      <input type="password" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} /><br />
      <button onClick={trysign} className='btn btn-success'>Register</button>
    </div>
  );
}

export default Register;
