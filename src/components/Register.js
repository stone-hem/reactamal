

import React, { useState } from 'react';



function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  async function trysign() {
    let item = { email, phone, name, password }
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
  }
  return (
    <div className='App' >
      <label>email</label><br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label>Phone Number</label><br />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
      <label>name</label><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={trysign} className='btn btn-success'>Register</button>
    </div>
  );
}

export default Register;
