import { useEffect } from "react";
import { useState } from "react";
import Welcome from "./Welcome";

const Loginn =()=>{
    let[inputname,setInp] = useState({
        username:'',
        address:'',
        city:'',
        age:'',
        num:''
    })

    let[getdata,setUdata] = useState(null)
    let[stts,setStts] = useState(false)

    const hinput=(event)=>{
        const{name,value} = event.target;
        console.log(event.target.value);
        setInp({
            ...inputname,
            [name]:value
        })
        
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        if(inputname.username === getdata.username 
                && inputname.address === getdata.address 
                    && inputname.city === getdata.city
                        && inputname.age === getdata.age
                            && inputname.num === getdata.num)
        {
            alert("Successfull")
            setStts(true)
        }
        else{
            alert("Data not matched")
        }
    }
    useEffect(()=>{
        let getdata = JSON.parse(localStorage.getItem("data"))
        setUdata(getdata)
    },[])
    
    if(stts){
        return <Welcome />
    }
    
    return(
        <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput} />
            <br />
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={inputname.address} onChange={hinput} />
            <br />
            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputname.city} onChange={hinput} />
            <br />
            <label htmlFor="">Age</label>
            <input type="text" name="age" value={inputname.age} onChange={hinput} />
            <br />
            <label htmlFor="">Number</label>
            <input type="text" name="num" value={inputname.num} onChange={hinput} />
            <br />
            <input type="submit" />
        </form>

        </>
    )
}

export default Loginn