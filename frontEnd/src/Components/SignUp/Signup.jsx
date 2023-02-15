import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import axios from "axios";

function Signup() {

  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const newUserData={name,phone,email,password}
  const navigate=useNavigate()

  const userRegistration=(e)=>{
    e.preventDefault()
    
    axios.post('http://localhost:8000/userrigistration',newUserData,{withCredentials: true,}).then((response)=>{
      navigate('/')
    }).catch((err)=>{console.log(err);})
  }
  
  return (
    <div className="signup">
      <div className="signup_main_div">
        <div>
          <h1>Signup</h1>
        </div>
        <div className="form_div">
          <form className="sform" >
            <div className="space">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e)=>setPhone(e.target.value)}
                
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              
            </div>
            <div className="sbtn">
              <button type="submit" onClick={userRegistration}>Submit</button>
            </div>
          </form>
          <p className="to_signup">
            Alredy have a account?
            <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
