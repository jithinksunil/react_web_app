import React, { useEffect, useState } from "react";
import "./Viewuser.css";

function Home() {
  const [detalis, setDetalis] = useState([]);
  const [updated, setUpdated] = useState(null);
  const [image, setImage] = useState(null);
  let url;
  
  return (
    <div className="home">
      <div className="left_div">
        <div className="profile_div">
          {detalis.image === null && <img src="" alt="" />}
          {detalis.image !== null && (
            <img
              src={updated != null ? URL.createObjectURL(updated) : url}
              alt=""
            />
          )}
        </div>
        {image !== null && (
          <div className="changeImg_div">
            <div>
              <div className="selecte_text">Selected Image</div>
              <img src={image ? URL.createObjectURL(image) : ""} alt="" />
            </div>
            <div>
        <button >Submit</button>
            </div>
          </div>
        )}

        <div className="add_profile_btn">
          {detalis.image !== null && <p>Edit Image:</p>}

          <input
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
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
            <div>Name: {detalis.name}</div> <div> Phone: {detalis.phone}</div>
            <div> Email: {detalis.email}</div>
            <div className="add_profile_btn">
              <button >Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
