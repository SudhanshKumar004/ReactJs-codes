import { Link } from 'react-router-dom'

function Layout(){
    return(
        <>
        <section className="Navbar">
            <nav>
                {/* <h1>Logo</h1> */}
                <ul style={{display:"flex",gap:"60px",listStyle:"none",cursor:"pointer"}}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </nav>
        </section>
        </>
    )
}

export default Layout