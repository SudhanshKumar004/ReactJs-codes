import axios from "axios"
import { useEffect, useState } from "react"


const Axios = () =>{
    let[apidata,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{console.log(res);
        setData(res.data)
        })
    },[])
return(
    <>
    <table border="">
        <thead>
            <th>ID</th>
            <th>TITLE</th>
        </thead>
        <tbody>
        { 
        apidata.map((e)=>{return <>
        <tr>
            <td>{e.id}</td>
            <td>{e.title}</td>
        </tr>
        </>
    })}
        </tbody>
    </table>


    </>
)
}

export default Axios

