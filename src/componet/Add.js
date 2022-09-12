import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
// import { addUser } from "../../redux/Action";
// import { editUser  } from "../../redux/Action";
import {addUser} from "../redux/Action";
import {editUser} from "../redux/Action";

function Add(props) {
  const { index } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
 

  const [user, setuser] = useState({
   
    name: " ",
    email: " ",
    mobileno: " ",
    gender: " ",
    hobby: [],
  });

  console.log("kjadsgfjad----------------------->",index);

  const users = useSelector((state) => state.addReducer.users);
  
  

  

useEffect(() => {
  if (index) {
    // redux***************************
    setuser(users[index])
    console.log("index.--",index);
      
  }
}, [index,users]);

  


  const gender = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.value;
   
    setuser({
      ...user,
      [name]: value,
    });
  };

  const hobby = (e) => {
    let value = user.hobby || [];
    if (e.target.checked) {
      value.push(e.target.value);
    } else {
      value = user.hobby.filter((item) => item !== e.target.value);
    }
    setuser((preState) => ({
      ...preState,
      hobby: value,
    }));
  };



  const SubmitUser = (e) => {
    e.preventDefault();
    navigate("/");




       
      
   



    if (index  == null) {
      
       dispatch(addUser(user));
    
    } else {
     
      
     users[index].name = user.name;
     users[index].email = user.email;
     users[index].mobileno = user.mobileno;
     users[index].hobby = user.hobby;
     users[index].gender = user.gender;
     dispatch(editUser(users[index]));
    }
   

         
    
  
    setuser({
      name: "",
      email: "",
      mobileno: "",
      gender: " ",
      hobby: [],
    });
    
    
  };

  return (
    <>
      <h1 className="crud"> SIMPAL CRUD</h1>
      <div className="form">
        <form onSubmit={SubmitUser}>
          <div className="name">
            <label style={{ fontWeight: "bold" }}>F Name : </label>
             <input
              type="text"
              name="name"
              placeholder="Please Enter Your Name"
              onChange={(e) =>
                setuser({ ...user, [e.target.name]: e.target.value }) }
              
              value={(user || {}).name}/>
            {/* {!valid && <p className="error">Enter Your Name</p>} */}
          </div>

          <br />

          <div className="emailid">
            <label style={{ fontWeight: "bold" }}>Email id : </label>
            <input
              type="text"
              name="email"
              placeholder="Please Enter Email"  
              onChange={(e) =>
                setuser({ ...user, [e.target.name]: e.target.value }) }
              value={(user||{}).email} />
            {/* {!valid && <p className="error">Enter Your Email</p>} */}
           </div>

          <br />

          <div className="mobilenum">
            <label style={{ fontWeight: "bold" }}> Mobile no: </label>
            <input
              type="tel"
              name="mobileno"
              placeholder="Please Enter Your Mobile Num"
              onChange={(e) =>
                setuser({ ...user, [e.target.name]: e.target.value })}
              value={(user || {}).mobileno} />
            {/* {!valid && <p className="error">Enter Your Mobilenum</p>} */}
          </div>

            <div className="hobby">
            <h4>Hobby :</h4>

            <label style={{ fontWeight: "bold" }}> Reading </label>
            <input
              type="checkbox"
              name="hobby"
              value="reading"
              id="reading"
              onChange={hobby}
            checked={(user || {}) && (user || {}).hobby.filter((e) => e === "reading")[0] === "reading" ? true : false}
              />

            <label style={{ fontWeight: "bold" }}> Playing </label>
            <input
              type="checkbox"
              name="hobby"
              value="playing"
              id="playing"
              onChange={hobby}
               checked={(user || {}) && (user || {}).hobby.filter((e) => e === "playing")[0] === "playing"? true : false }
              />

            <label style={{ fontWeight: "bold" }}> Other </label>
            <input
              type="checkbox"
              name="hobby"
              value="other"
              id="other"
              onChange={hobby}
               checked={ (user || {}) && (user || {}).hobby.filter((e) => e === "other")[0] === "other" ? true : false }
               />
              {/* {!valid && <p className="error">Enter Your Hobbie</p>} */}
          </div>


          <div className="gender">
            <h4>Gender:</h4>

            <label style={{ fontWeight: "bold" }}>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={gender}
              checked={(user || {}).gender === "male" ? true : false} />

            <label style={{ fontWeight: "bold" }}> Female </label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={gender}
              checked={(user || {}).gender === "female" ? true : false} />

            <label style={{ fontWeight: "bold" }}> Other </label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={gender}
              checked={(user || {}).gender === "other" ? true : false}  />
          </div>

          <br></br>
          <div className="button">
            <button style={{ fontWeight: "bold" }}>Submit </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;

// useEffect(() => {
//   if (id) {
//     // redux***************************
//     setUser(list.Data[id])
//     setEditIndex(id)
//   }
// }, [id])