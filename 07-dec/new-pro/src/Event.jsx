const Event = () =>{

    function cl(){
        alert("Clicked");
    }

    // function hov(){
    //     alert("Have a good day :)");
    // }

    function dc(){
        alert("Double Clicked");
    }

    // function leave(){
    //     alert(" You left the element");
    // }

    // function drag(){
    //     alert("Leave it");
    // }
    return(
        <>
        <button onClick={cl}>Click Here</button><br /><br />
        {/* <h1 onMouseEnter={hov}>Come here</h1><br /><br /> */}
        <button onDoubleClick={dc}>Double Click</button><br /><br />
        {/* <h1 onMouseLeave={leave}>For leave</h1><br /><br /> */}
        {/* <h1 onDrag={drag}>Drag me</h1> */}

        {/*-------this is an inline event with arrow function-------*/}
        <button onClick={()=>alert("inline")}>Inline</button> 
        </>
    )
}

export default Event;