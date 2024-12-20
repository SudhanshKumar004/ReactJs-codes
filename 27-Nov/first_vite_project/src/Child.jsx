import Child2 from "./Child2";

function Child(props){
    return(

        <>
            <Child2 fname={props.name} age = {props.age}/>
        </>
    )
}

export default Child;