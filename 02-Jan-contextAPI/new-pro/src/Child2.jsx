import React from "react"
import { data, fdata } from "./App"
import Child3 from "./Child3"

let cdata = createContext();
let dataa = "New Year From child 2"

const Child2 = () =>{
    return(
        <>
        <fdata.Consumer>
            {
                (data)=>{
                    return(
                        <h1>happy {data}</h1>
                    )
                }
            }
        </fdata.Consumer>

        <cdata.Provider>
        <Child3 />
        </cdata.Provider>
        </>
    )
}

export default Child2
export {cdata}