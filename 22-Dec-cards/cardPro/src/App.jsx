import { useState } from 'react'
import Card from './Card'


function App() {

  const people = [
  {
    name: "Rajesh Sharma",
    age: 30,
    city: "Mumbai",
    profilePhoto: "https://example.com/profile-photo-rajesh.jpg"
  },
  {
    name: "Priya Verma",
    age: 25,
    city: "Delhi",
    profilePhoto: "https://example.com/profile-photo-priya.jpg"
  },
  {
    name: "Anjali Patel",
    age: 35,
    city: "Ahmedabad",
    profilePhoto: "https://example.com/profile-photo-anjali.jpg"
  },
  {
    name: "Amit Kumar",
    age: 40,
    city: "Bengaluru",
    profilePhoto: "https://example.com/profile-photo-amit.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 28,
    city: "Chennai",
    profilePhoto: "https://example.com/profile-photo-sneha.jpg"
  }
];




  return (
    <>
    <div className="p-10">
    {people.map(function(item,idx){
    return <Card key={idx} name={item.name} age={item.age} city={item.city} profilePhoto={item.photo} />
  })}
</div>
    </>
  )
}

export default App
