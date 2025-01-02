import { cdata } from "./Child2"

const Child4 = () =>{
    
    return(
        <>
        <cdata.consumer>
            {
                (dataa)=>{
                    return(
                        <h1>Happy {dataa}</h1>
                    )
                }
            }
        </cdata.consumer>

        </>
    )
}

export default Child4