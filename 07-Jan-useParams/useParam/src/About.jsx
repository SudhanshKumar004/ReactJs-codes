import { useNavigate, useParams } from "react-router-dom"

const About = ()=>{

    let {name,age} = useParams()
    console.log(name);
    
    let navigate = useNavigate()
    function contactpage()
    {
        navigate('/Contact')
    }
    return(
        <>
        <h1>About</h1>
        <h2>name is {name} age {age}</h2>
        <button onClick={contactpage}>Contact us</button>
        </>
    )
}

export default About