import axios from "axios"
import { useEffect, useState } from "react"


const Axios = () =>{
    let[apidata,setData] = useState([])

    let[frminp,setFrminp] = useState({
        "name":"",
        "age":"",
        "city":""
    })
    const changeinp= (e) => {
        let{name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const subform = () =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(ress=>alert("inserted"))
    }
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
    <form onSubmit={subform}>
    <label htmlFor="">Name</label>
    <input type="text" value={frminp.name} name="name" onChange={changeinp}/><br />
    <label htmlFor="">Age</label>
    <input type="text" value={frminp.age} name="age" onChange={changeinp}/><br />
    <label htmlFor="">City</label>
    <input type="text" value={frminp.city} name="city" onChange={changeinp}/><br />
    <input type="submit"/>
    </form>
</>

)
}

export default Axios

