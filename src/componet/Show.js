
import React,{ useState,  useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { removeUser } from "../redux/Action";
import {useDispatch,useSelector} from "react-redux";
// import { editUser  } from "../../redux/Action";


function Show() {


 const[savedata,setsaveData]=useState([]);

 const users = useSelector((state) => state.addReducer.users);
console.log("i know",users);

 // savedata.push(...users);
 // console.log("save-->",savedata);
  console.log("userss",users);
 const dispatch = useDispatch();

useEffect(() => {

   setsaveData(users);

}, [users])
console.log("save",savedata);
 // if(localStorage.getItem('user') != null){

 //    }else{
 //    localStorage.setItem("user", JSON.stringify(EditData));
 //  }

 
 
   // const [Delete, setDelete] = useState();
   const navigate = useNavigate();

 //   useEffect(() => {
     
 //      const data = JSON.parse(localStorage.getItem("user"))
 //    setEditData(data);
 //    console.log(data);
 //  }, []);


 
 // console.log("EditData------>",EditData)

 const  deleteUser = (i) => {
   debugger
   //  const EditData = JSON.parse(localStorage.getItem("user"))
   // dispatch(removeUser(EditData));
   savedata.splice(i, 1);
   // setEditData(EditData);
   // setDelete(true)
   //  localStorage.setItem("user", JSON.stringify(EditData))
   setsaveData([...savedata])
   dispatch(removeUser(savedata));
 }

const EditUser = (id) =>{
 //  dispatch(editUser(users));


  navigate(`/Add/${id}`)
console.log(`${id}`)
//  console.log(users.id || users === id);
//  const obj = users.map(id => id || id.users & id.users);
//  const obj = (users || []).find(item => (item && item.users === id));

//  console.log("obj---->" ,obj);


}


   
  

return(
<div className="contenar ">
<table>
 <thead>
   <tr>
     
     <th>F Name </th>
     <th>Email id </th>
     <th>Mobile no </th>
     
     <th>Hobby</th>
     <th>Gender</th>
     <th>Action</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
 {
  
   savedata.length > 0 && savedata?.map
 ((u,i) =>(
             
             
               <tr key={i}>
                 
                 {/* <td key={u.id}> </td> */}
                 <td style={{ fontWeight: "bold" }}>{u.name}</td>
                 <td style={{ fontWeight: "bold" }}>{u.email}</td>
                 <td style={{ fontWeight: "bold" }}>{u.mobileno}</td>
                 <td style={{ fontWeight: "bold" }}>{u.hobby}</td>
                 <td style={{ fontWeight: "bold" }}>{u.gender}</td>
                 <td>
                 
                   <button
                     style={{ fontWeight: "bold" }}
                        onClick={() => EditUser(i)}
                         // onClick={() => dispatch(editUser(users.id))}
                   >
                      {/* <Link to={`/Add/${users.id}`} className="btn btn-primary"> */}
                     Edit
                     {/* </Link> */}
                   </button>
                 </td>
                 <td>
                  
                   <button
                     style={{ fontWeight: "bold" }}
                      onClick={() => deleteUser(i)}
                     // onClick={() => dispatch(removeUser(users.id))}
                     // onClick={() => dispatch(removeUser(EditData.id))}
                   >
                     Delete
                   </button>
                 </td>
               </tr>
              
           
))}
         </tbody>
       </table>
     </div>

)
} 
export default Show;