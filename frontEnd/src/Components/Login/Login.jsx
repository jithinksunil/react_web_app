import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Login.css";
function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState()
  const userData={email,password}


  const handleLogin=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000',userData,{withCredentials: true,}).then((response)=>{

    })

  }

  return (
    <div className="signup">
      <div className="signup_main_div">
        <div>
          <h1>Login</h1>
        </div>
        <div className="form_div">
          <form className="sform" >
            <div className="space">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="space">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="sbtn">
              <button type="submit" onClick={handleLogin} >Login</button>
            </div>
          </form>
          <p className="to_signup">
          <Link to='/signup'>
            Don't have a account?
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;