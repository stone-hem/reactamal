

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from './Header';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()
  async function trysign() {
    let item = { email, password }
    // console.log(item);
    let result = await fetch("http://192.168.1.47:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      }
    })

    result = await result.json()
    if (!result.token) {
      console.log('not authorized')
      alert('you are not authorized')
      history("/login")
    }
    else {
      localStorage.setItem('user', JSON.stringify(result));
      history("/home")
      console.log("result", result)
    }



  }
  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log('got it');
      history('/home')
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <label>email</label><br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" /><br />
      <label>password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" /><br />
      <br />
      <button onClick={trysign} className='btn btn-success'>Login</button>
    </div>
  );
}

export default Login;
