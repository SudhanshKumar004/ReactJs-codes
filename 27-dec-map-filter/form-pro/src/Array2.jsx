const Array2 =()=>{

    let arr = [23,45,3,23,66,5,4,34]

    let fil = arr.filter((e)=>{return e>30})
    return(
        <>
        <ul>
        {
        fil.map((e,index)=> {return <li key={index}>{e}</li>})
        }
        </ul>
        </>
    )
}

export default Array2