import axios from "axios"
import { useEffect, useState } from "react"

const Fet = ()=>{
    let[getdata,setGetdata]= useState([])
    let[frmvisible,setFrmvisible] = useState(false)
    let[editdata,setEditdata] = useState({})

    const hinput = (e)=>{
        const{name,value} = e.target;
        setEditdata({...editdata,[name]:value})
    }

    let[frminp,setFrminp] = useState({
        "name":"",
        "age":"",
        "city":""
    })
    const changeinp= (e) => {
        let{name,value}=e.target;
        setFrminp({...frminp,
            [name]:value})
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

    const putdata = (id) =>{
        // id.preventDefault();
        axios.put(`http://localhost:3000/userdata/${id}`)
        .then(ree=>{alert("Data Edited")})
    } 

    useEffect(()=>{
        axios.get("http://localhost:3000/userdata")
    .then(res=>{console.log(res.data);
        setGetdata(res.data)
    })            
    },[])
    return(
        <>
                <table border="">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CITY</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
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
                                    <td><button onClick={()=>{setFrmvisible(true),setEditdata(e)}}>Edit</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                        <h1>Add Data</h1>
                <form onSubmit={subform}>
    <label htmlFor="">Name</label>
    <input type="text" value={frminp.name} name="name" onChange={changeinp}/><br />
    <label htmlFor="">Age</label>
    <input type="text" value={frminp.age} name="age" onChange={changeinp}/><br />
    <label htmlFor="">City</label>
    <input type="text" value={frminp.city} name="city" onChange={changeinp}/><br />
    <input type="submit"/>
    </form>

    <h1>Edit Data</h1>
    {frmvisible && (

            
            <form onSubmit={putdata}>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" value={editdata.id} onChange={hinput} /> <br /><br />

                <label htmlFor="name">NAME</label>
                <input type="text" name="name" value={editdata.name} onChange={hinput} /> <br /><br />
                
                <label htmlFor="age">AGE</label>
                <input type="text" name="age" value={editdata.age} onChange={hinput} /> <br /><br />
                
                <label htmlFor="city">CITY</label>
                <input type="text" name="city" value={editdata.city} onChange={hinput} /> <br /><br />

                <input type="submit" />
            </form>
    )}
     
        </>
    )
}

export default Fet