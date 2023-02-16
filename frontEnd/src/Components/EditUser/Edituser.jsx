import { useState, useEffect, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../axios";
import "./Edituser.css";

function Edituser() {
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const details={name,phone,email,password}
  const {userid}=useParams()

  useEffect(()=>{
    axios.post('/userprofile',{_id:userid},{withCredentials: true,}).then((response)=>{
      const {name,phone,email,password}=response.data
      setName(name)
      setPhone(phone)
      setEmail(email)
      setPassword(password)
    })
  },[])

  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name)
    axios.post(`/userupdate/${userid}`,details,{withCredentials: true,}).then((response)=>{
      navigate('/admin')
    }).catch((err)=>{console.log(err);})
  }
  
  return (
    <div className="signup">
      <div className="signup_main_div">
        <div>
          <h1>Edit User</h1>
        </div>
        <div className="form_div py-5">
          <form className="sform" >
            <div className="space">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              
            </div>
            <div className="sbtn">
              <button onClick={handleSubmit} type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Edituser;
