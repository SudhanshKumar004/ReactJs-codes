import { createContext, useContext } from "react"
import { cdata } from "./Child2"
import Child5 from "./Child5";


let newdata = createContext();
let city = "Bhopal"
let state = "MP"

const Child4 = () =>{
    let {name,age}=useContext(cdata)
    
    return(<>
        <div>Child 4
            <h1>my name is {name} and age is {age}</h1>
        </div>

        <newdata.Provider value={{city,state}}>
            <Child5 />
        </newdata.Provider>
        </>
    )
}

export default Child4
export {newdata}