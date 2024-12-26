import { use, useState } from "react"

const Form3 = () => {

    let[inputname,setInput] = useState({
        username:'',
        address:'',
        city:'',
        age:''
    })

    const hinput = (event) =>{
        let{name,value} = event.target;
        console.log(event.target.value);
        setInput({
            ...inputname,
            [name]:value
        })
    }

    const finalSubmit=(event)=>{
        event.preventDefault()
        console.log(inputname);
        
    }
    return(
        <>
        <form onSubmit={finalSubmit} >
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput} /><br />
           
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={inputname.address} onChange={hinput} /><br />
           
            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputname.city} onChange={hinput} /><br />
           
            <label htmlFor="">Age</label>
            <input type="text" name="age" value={inputname.age} onChange={hinput} /><br />
           
            <input type="submit" />
        </form>
        </>
    )
}

export default Form3