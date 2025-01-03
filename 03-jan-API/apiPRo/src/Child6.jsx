import { useContext } from "react"
import { newdata } from "./Child4"


const Child6 = () =>{
    let{ city,state } = useContext(newdata)
    return(
        <>
            <h1>city is {city} and state is {state}</h1>
        </>
    )
}

export default Child6