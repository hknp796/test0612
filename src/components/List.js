import React,{useState} from 'react'
import './List.css'
import Modal from './Modal'
const details = [
  {
    fname: "Anthony B Renfroe",
    email: "example@gmail.com",
    department: "Android",
    designation: "Designer",
    Date_of_joining: "Jan 20 2020",
    salary: "$30,000",
  },
  {
    fname: "Anthony ",
    email: "example@gmail.com",
    department: "Android",
    designation: "Designer",
    Date_of_joining: "Jan 20 2020",
    salary: "$30,000",
  },
  {
    fname: "Anthony ",
    email: "example@gmail.com",
    department: "Android",
    designation: "Designer",
    Date_of_joining: "Jan 20 2020",
    salary: "$30,000",
  },
  {
    fname: "Anthony ",
    email: "example@gmail.com",
    department: "Android",
    designation: "Designer",
    Date_of_joining: "Jan 20 2020",
    salary: "$30,000",
  },
];
  function List() {
     const [show, setShow] = useState(false);
     function hide(){
      setShow(!show)
     }
    return (
      <>
      {details.map((data,key)=>{
        console.log(data.fname);
        return(
          <div key={key} className="card-container">
        <p className="round" >AB</p>
          <h4>{data.fname}</h4>
        <h6> {data.email}</h6>

        <div className="grid">
          <div className="main">
            <h6>{data.department}</h6>
            <p>Department</p>
          </div>
          <div className="side">
            <h6>{data.designation}</h6>
            <p>Designation</p>
          </div>
          <div className="main">
            <h6>{data.Date_of_joining}</h6>
            <p>Date of Joining</p>
          </div>
          <div className="side">
            <h6>{data.salary}</h6>
            <p>Salary</p>
          </div>
        </div>
        </div>
        )
      })}
      <h1 onClick={hide}>+</h1>
      {show ? <Modal /> : null}
      </>
    );
}

export default List
