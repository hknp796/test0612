import React from 'react'
import './Password.css'
function Password() {
    return (
      <div>
        <div className="form">
          <h2>Password Reset</h2>
          <p> Enter your email below to proceed.</p>
          <div className="input">
            <div className="inputBox">
              <label for="">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
           
            <div className="inputBox">
              <input type="submit" name="" value="Reset Password" />
            </div>
            <p className="back">Back to<a href="#">  Login</a></p>
    
          </div>
        </div>
      </div>
    );
}

export default Password
