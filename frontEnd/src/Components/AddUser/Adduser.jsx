import { Link } from "react-router-dom";
import "./Adduser.css";

function Adduser() {
  
  return (
    <div className="signup">
      <div className="signup_main_div">
        <div>
          <h1>Add User</h1>
        </div>
        <div className="form_div py-5">
          <form className="sform" >
            <div className="space">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                
              />
              
            </div>
            <div className="space">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                
              />
              
            </div>
            <div className="sbtn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
