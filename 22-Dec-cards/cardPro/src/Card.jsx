import React from "react"

function Card(props){
    return(
        <>
        <div className='mr-7 bg-white text-black inline-block p-6 txt-center rounded'>
            <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
            <h2 className='text-blue-400'>{props.city}{props.age}</h2>
            <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
        </div>
        </>
    )
}

export default Card