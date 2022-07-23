import { useEffect, useState} from 'react';
const Home=()=>{
    const [data, setData]= useState(null)
    const [pending, setPending]= useState(false)

   
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:7500/users")
            .then(res=>res.json())
            .then(data => {setData(data);})
        },500)
    },[])
    
    return(
        <div className="user">
            <button onClick={()=>{setPending(!pending)}}>Display</button>
            {pending && data.map((user)=>(
                <div>
                    <h1>Name : {user.name}</h1>
                    <h2>Age : {user.age}</h2>
                    <h2>Dept : {user.dept}</h2>
                    <hr />

                </div>
            ))}
        </div>


    )
}
export default Home;