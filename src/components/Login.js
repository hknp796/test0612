import React from 'react'
import "./login.css"
import Password from './Password';
function Login() {
 
    return (
      <div>
        <div className="form">
          <h2>Login</h2>
          <p> Sign in to your account to continue</p>
          <div className="input">
            <div className="inputBox">
              <label for="">Email Address</label>
              <input
                type="text"
               
                name="email"
                placeholder="company@example.com"
              />
            </div>
            <div className="inputBox">
              <label for="">Password</label>
              <span className="forgot">
                <a href="#">Forgot Your Password?</a>
              </span>

              <input type="password"  placeholder="..."/>
              
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Sign In"/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login
