import { useEffect, useState } from "react";

const Content=()=>{

    let[data,setdata]= useState(null)
    let[pending, setPending]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:7500/users")
            .then(res=>res.json())
            .then(data=>{setdata(data)})
        },300)
    },[])

    return(
        <div>
            <button onClick={()=>{setPending(true)}}>Display</button>
            {pending && data.map((user)=>(
                <div>
                    <h1>name : {user.name}</h1>
                    <h2>age : {user.age}</h2>
                    <h2>dept : {user.dept}</h2>
                </div>
                
            ))}

        </div>
    )
}
export default Content;