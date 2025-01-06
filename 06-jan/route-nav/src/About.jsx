import { useNavigate } from "react-router-dom"

const About = ()=>{

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