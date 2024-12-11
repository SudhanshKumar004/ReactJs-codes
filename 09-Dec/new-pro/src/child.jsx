import Child2  from "./child2";
const Child1= (props) => {
    return(
        <>
        <h1>{props.Name}</h1>

        <Child2 fname = {props.Name} age = {props.age}/>
        </>
    )
}

export default Child1; 