import React,{useState} from 'react'
import './Modal.css'
function Modal() {
  
    
    return (
      <div className="container">
        <div className="modal">
          <div className="modal_content">
            <h3>Create New Employee</h3>
            <label for="" className="mname">
              Name
            </label><br/>
            <input type="text" className="mtext" />
            <label for="" className="etext">Email</label>
            <input type="text" />
            <br />
            <label for="" className="lpass">
              Password
            </label>
            <input type="password" className="pass" />
            <button>Create</button>
          </div>
        </div>
      </div>
    );
}

export default Modal
