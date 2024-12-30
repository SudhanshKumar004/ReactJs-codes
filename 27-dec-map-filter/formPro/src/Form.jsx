import { useState } from "react"
import Loginn from "./Login"

const Form =()=>{
    let[inputname,setInp] = useState({
        username:'',
        address:'',
        city:'',
        age:'',
        num:''
    })

    let[status,setStatus] = useState(false)

    const hinput=(event)=>{
        const{name,value} = event.target;
        console.log(event.target.value);
        setInp({
            ...inputname,
            [name]:value
        })
        
    }

    const finalSubmit =(event)=>{
        event.preventDefault()
        console.log(inputname);
        if(inputname.username == "" || inputname.address == "" || inputname.age == "" || inputname.city == "" || inputname.num == ""){
            alert("All fields required")
        }
        else{
            localStorage.setItem("data",JSON.stringify(inputname))
            setStatus(true)
        }
        
    }

    if(status)
    {
        return <Loginn />
    }
    
    return(
        <>
        <h1>Sign Up</h1>
        <form onSubmit={finalSubmit}> 
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

export default Form