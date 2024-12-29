const Map2 = () =>{
    let ar = [{
            id:1,
            name:"string",
            age:24,
            city:"bhopal"
        },
        {
            id:2,
            name:"string2",
            age:25,
            city:"Delhi"
        }
    ]
    let arf = ar.map((e,index)=>{return <li>{e.id} - {e.name} - {e.age} - {e.city}</li>})

    
    return(
        <>
     <h1>{arf}</h1>
        </>
    )
}
export default Map2