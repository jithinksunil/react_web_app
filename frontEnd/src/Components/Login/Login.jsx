import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Cookies from 'js-cookie';

import {MyContext} from '../../Context'

import "./Login.css";
function Login() {

  const {loggedIn,setLoggedIn,adminLoggedIn,setAdminLoggedIn}=useContext(MyContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState()
  const [location,setlocation]=useState('/')
  const navigate=useNavigate()

  useEffect(()=>{
    setlocation(window.location.pathname)
  })
  

  const handleLogin=(e)=>{
    e.preventDefault()
    if(location=='/'){
      const userData={email,password}
      axios.post('/',userData).then((response)=>{
        let {userExist,passWordVerified}=response.data
        if(userExist&&passWordVerified){

          Cookies.set('jwt_token', response.data.token, { expires: 7000 })
          setLoggedIn(true)
          navigate('/userprofile')
        }else if(userExist){
          console.log('email or password does not matches')
        }else{
          console.log('user does not exist')
        }
      })
    }else if(location=='/adminlogin'){
      const adminData={email,password}
      axios.post('/adminlogin',adminData).then((response)=>{
        let {adminExist,passWordVerified}=response.data
        if(adminExist&&passWordVerified){
          Cookies.set('adminToken', response.data.adminToken, { expires: 7000 })
          setAdminLoggedIn(true)
          navigate('/admin')
        }else if(adminExist){
          console.log('email or password does not matches')
        }else{
          console.log('admin does not exist')
        }
      })
    }
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