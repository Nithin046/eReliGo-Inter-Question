import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EmployeeDetails=()=>{
    let [data,setData]= useState(null);
    let [pending,setPending]=useState(false);

    
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:3075/employee")
            .then(res=>res.json())
            .then((data)=>{setData(data);setPending(true)})
        },1000)
    },[])
        

    return(
        <div className="dis">
            <h1>LIST OF ALL THE EMPLOYEE</h1>
            <Link to={"/addemp"}><button>Add LIST</button></Link>
            {pending && 
            <div>
                <table border="2px" bordercolor="white">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Active/Inactive</th>
                        </tr>
                    </thead>
                    <tbody>
                       { data.map((emp)=>(
                           <tr>
                               <td >{emp.name}</td>
                               <td >{emp.email}</td>
                               <td >{emp.designation}</td>
                               <td >{emp.status}</td>
                           </tr>
                       ))

                       } 
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}
export default EmployeeDetails;