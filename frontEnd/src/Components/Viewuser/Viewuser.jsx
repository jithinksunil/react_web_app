import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../axios";
import "./Viewuser.css";

function Home() {
  const [details, setDetails] = useState({});
  useEffect(()=>{
    axios.post('/userprofile',{_id:'63eccc321f3f9ffb96e56aa9'},{withCredentials: true,}).then((response)=>{
    setDetails(response.data)
    })
  })
  
  return (
    <div className="home">
      <div className="left_div">
        <div className="profile_div">
          {details.image === null && <img src="" alt="" />}
          {details.image !== null && (
            <img
              
              alt=""
            />
          )}
        </div>
        { (
          <div className="changeImg_div">
            <div>
              <div className="selecte_text">Selected Image</div>
              
            </div>
            <div>
        <button >Submit</button>
            </div>
          </div>
        )}

        <div className="add_profile_btn">
          {details.image !== null && <p>Edit Image:</p>}
          <input
            value=""
            type="file"
            
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
                <button >Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
