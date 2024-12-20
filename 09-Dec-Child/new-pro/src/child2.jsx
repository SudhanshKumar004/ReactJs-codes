const Child2 = ({fname,age}) => { //destructuring;
    // let {fname,age} = props; //destructuring 
    return(
        <>
            <h1> From Child 2 {fname}{age}</h1>
        </>
    )
}

export default Child2;