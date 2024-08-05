import React from 'react'
import { useState } from 'react';
import { login } from '../api/auth';

const Login = () => {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
      });
    };
    
    const {email, password } = formdata;
  
    const handlechange = (e) => {
      setformdata(...formdata, { [e.target.name]: e.target.value });
    };
  
    const handlesubmit = async (e) => {
      e.preventDefault();
  
      try {
        await login(formdata);
        alert("User Registerd Succesfully");
      } catch (err) {
        console.log(err.message);
        alert("Error Registering");
      }
  return (
    <div>
    <form onSubmit={handlesubmit}>
      <input
        type="email"
        name={email}
        onChange={handlechange}
        placeholder="Enter Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlechange}
        placeholder="Enter Password"
        required
      />
      <button type="sumbit">Register</button>
    </form>
  </div>
  )
}

export default Login
