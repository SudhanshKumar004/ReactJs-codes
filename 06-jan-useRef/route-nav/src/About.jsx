import { useNavigate, useParams } from "react-router-dom"

const About = ()=>{

    let name = useParams()
    console.log(name);
    
    let navigate = useNavigate()
    function contactpage()
    {
        navigate('/Contact')
    }
    return(
        <>
        <h1>About</h1>

        <button onClick={contactpage}>Contact us</button>
        </>
    )
}

export default About