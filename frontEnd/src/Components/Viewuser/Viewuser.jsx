import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import axios from "../../axios";
import {MyContext} from '../../Context'
import "./Viewuser.css";

function Home() {
  const {loggedIn,setLoggedIn}=useContext(MyContext)
  const [details, setDetails] = useState({});
  const [image,setImage]= useState(null)
  const [updated,setUpdated]=useState(null)
  const navigate=useNavigate()

  useEffect(()=>{
    axios.post('/userprofile',{_id:'63eccc321f3f9ffb96e56aa9'},{withCredentials: true,}).then((response)=>{
    setDetails(response.data)
    })
  },[])

  let formData=new FormData()
  const handleImageSubmit=(e)=>{
    e.preventDefault()
    formData.append("file",image)
    console.log(formData);
    axios.post('/addimage/63eccc321f3f9ffb96e56aa9',formData,{headers:{"Content-Type":"multipart/form-data"}}).then((response)=>{
    })
  }

  const handleLoggOut=(e)=>{
    
    e.preventDefault()
    Cookies.remove('jwt_token')
    setLoggedIn(false)
    navigate('/')
  }


  let url=`http://localhost:8000/uploads/${details.image}`
  return (
    <div className="home">
      <div className="left_div">
        <div className="profile_div">
          {updated?<img src={updated} alt="Dp" />:<img src={url} alt="Dp" />}
        </div>
        { (
          <div className="changeImg_div">
            <div>
              <div className="selecte_text">Selected Image</div>
              
            </div>
            <div>
        <button onClick={handleImageSubmit} >Submit</button>
            </div>
          </div>
        )}

        <div className="add_profile_btn">
          {details.image !== null && <p>Edit Image:</p>}
          <input
            value=""
            type="file"
            onChange={(e)=>{setImage(e.target.files[0]);setUpdated( URL.createObjectURL(e.target.files[0]));console.log(URL.createObjectURL(e.target.files[0]))}}
            id="file"
          />

        </div>
      </div>
      <div className="right_div">
        <div className="innerRight">
          <div className="profile">
            <div className="innerProfile">
              <h1>Profile</h1>
            </div>
          </div>
          <div className="details">
            <div>Name: {details.name}</div> <div> Phone: {details.phone}</div>
            <div> Email: {details.email}</div>
            <div className="add_profile_btn">
              <Link to='/'>
                <button onClick={handleLoggOut} >Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
