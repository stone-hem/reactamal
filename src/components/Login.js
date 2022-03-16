

import React, { useState } from 'react';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function trysign() {
    let item = { email, password }
    console.log(item);
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    console.log("result", result)
  }
  return (
    <div className="App">
      <label>email</label><br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label>password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <br />
      <button onClick={trysign} className='btn btn-success'>Login</button>
    </div>
  );
}

export default Login;
