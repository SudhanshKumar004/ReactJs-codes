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
    <div>
        { apidata.map((e)=>{return <ul>e.title</ul>})}
    </div>


    </>
)
}

export default Axios

