import { useState } from "react";
import { useHistory } from "react-router-dom";


const AddEmpDetail=()=>{
    let [name,setEname]=useState("");
    let [email,setEmail]=useState("");
    let [designation, setDesignation]=useState("");
    let [status, setStatus]=useState("");

    const history= useHistory()

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newEmp = {name,email,designation,status};

        fetch("http://localhost:3075/employee",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newEmp)})
        .then(()=>{
            alert("detail added successfully");
            history.push("/")
        })
        
    }


    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name :</label> <input type="text" placeholder="Enter Name" onChange={(e)=>{setEname(e.target.value)}} /> <br />
                <label htmlFor="">Email :</label> <input type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                <label htmlFor="">Designamtion :</label> <input type="text" placeholder="Enter Designation" onChange={(e)=>{setDesignation(e.target.value)}}  /><br />
                <label htmlFor="">Active/Inactive :</label> <input type="text" placeholder="Enter Status" onChange={(e)=>{setStatus(e.target.value)}} /><br />
                <input type="submit" value="submit" />
            </form>



        </div>
    )
}
export default AddEmpDetail;