import axios from "axios"
import { useEffect, useState } from "react"

const Fet = ()=>{
    let[getdata,setGetdata]= useState([])

    let[frminp,setFrminp] = useState({
        "name":"",
        "age":"",
        "city":""
    })
    const changeinp= (e) => {
        let{name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const subform = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/userdata',frminp)
        .then(ress=>alert("inserted"))
    }

    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(re=>{alert("deleted")})
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
                                </tr>
                            ))
                        }
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

export default Fet