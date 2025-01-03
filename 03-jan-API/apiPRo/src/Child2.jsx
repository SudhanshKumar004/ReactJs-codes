import React, { createContext } from "react"
import { fdata } from "./App"
import Child3 from "./Child3";

let cdata = createContext();
let name = "Bames Jond"
let age = 500


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

        <cdata.Provider value={{name,age}}>
        <Child3 />
        </cdata.Provider>
        </>
    )
}

export default Child2
export {cdata}