import React, { useState } from "react";
import { register } from "../api/auth";

const Register = () => {
  const Register = () => {
    const [formdata, setformdata] = useState({
      username: "",
      email: "",
      password: "",
    });
  };
  

  const { username, email, password } = formdata;

  const handlechange = (e) => {
    setformdata(...formdata, { [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formdata);
      alert("User Registerd Succesfully");
    } catch (err) {
      console.log(err.message);
      alert("Error Registering");
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name={username}
          onChange={handlechange}
          placeholder="Enter User Name"
          required
        />

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
  );
};

export default Register;
