import axios from "axios"
import { useEffect, useState } from "react"

const Fet = ()=>{
    let[getdata,setGetdata]= useState([])

    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(re=>{alert("deleted")})
    }
    const myadd=(id)=>{
        axios.put(`http://localhost:3000/userdata/${id}`)
        .then(re=>{alert("added")})
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/userdata")
    .then(res=>{console.log(res.data);
        setGetdata(res.data)
    })            
    },[mydel])
    return(
        <>
                <table border="">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CITY</th>
                        <th>DELETE</th>
                    </thead>
                    <tbody>
                        {
                            getdata.map((e)=>(
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
                                    <td><button onClick={()=>myadd(e.id)}>Edit</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </>
    )
}

export default Fet