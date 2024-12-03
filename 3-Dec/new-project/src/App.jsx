import './App.css';
import Nav from './Navbar.jsx';

function app()
{

  let sty = {
    backgroundColor: "blue",
    color: "yellow"
  }
  return(
  <>
  <Nav />
  <h1 style = {{backgroundColor:"red",color:"white"}}>Welcome To React Class.....</h1>
  <br />
  <h2 style={sty}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque omnis doloribus quam laboriosam sunt architecto, explicabo placeat voluptatum quae 
  suscipit, sit nobis aliquam nesciunt eum consequatur praesentium molestias? Ex.</h2>
  <br />
  <h1 className='head1'>Code your Future</h1>
  
  </>

  )
}

export default app
