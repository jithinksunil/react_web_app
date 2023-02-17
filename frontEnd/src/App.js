import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import { useEffect, useContext } from 'react'
import Cookies from 'js-cookie';

import {MyContext} from './Context'
import axios from './axios'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import UserProfilePage from './Pages/UserProfilePage';
import LoginPage from './Pages/LoginPage'; 
import SignupPage from './Pages/SignupPage';
import AdminPage from './Pages/AdminPage';
import AdduserPage from './Pages/AdduserPage';
import EdituserPage from './Pages/EdituserPage';


function App() {
  const {loggedIn,setLoggedIn,adminLoggedIn,setAdminLoggedIn}=useContext(MyContext)

  useEffect(()=>{

    let token=Cookies.get('jwt_token')
    if(token){
      //{ withCredentials: true } is added to pass the request with cookies if false no cockies will be send
      axios.get('/tokenvalidation',{ withCredentials: true }).then((response)=>{
        let validated=response.data.validationSuccessful
        setLoggedIn(validated)
      })
    }

    let adminToken=Cookies.get('adminToken')
    if(adminToken){
      //{ withCredentials: true } is added to pass the request with cookies if false no cockies will be send
      axios.get('/admintokenvalidation',{ withCredentials: true }).then((response)=>{
        let validated=response.data.validationSuccessful
        setAdminLoggedIn(validated)
        console.log(validated);
      })
    }
  },[])

  return (
    
    <div className="App">
      <BrowserRouter> {/*wrapping with BrowserRouter*/}
        <Routes> {/*wrapping with browser Routes*/}
        
          <Route path='/' element={ loggedIn ? <Navigate to='/userprofile'/> : <LoginPage/> }/>
          <Route path='/signup' element={ loggedIn ? <Navigate to='/userprofile'/> : <SignupPage/>}/>
          <Route path='/userprofile' element={ loggedIn ? <UserProfilePage/> : <Navigate to='/'/>}/>
          <Route path='/adminlogin' element={adminLoggedIn?<Navigate to='/admin'/>:<LoginPage/>}/>
          <Route path='/admin' element={adminLoggedIn?<AdminPage/>:<Navigate to='/adminlogin'/>}/>
          <Route path='/adduser' element={<AdduserPage/>}/>
          <Route path='/edituser/:userid' element={adminLoggedIn?<EdituserPage/>:<Navigate to='/adminlogin'/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
