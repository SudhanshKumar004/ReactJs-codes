const Map2 = () =>{
    let ar = [
        "obj":{
            name:"string",
            age:24,
            city:"bhopal"
        }
    ]
    let arf = obj.map((e,index)=>{return <li key={index}>{e}</li>})
    return(
        <>
        <h1>{arf}</h1>
        </>
    )
}
export default Map2