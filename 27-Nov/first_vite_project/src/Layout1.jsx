import { Link,Outlet } from "react-router-dom"
import './Lay.css'


function Layout(){
    return(
        <>
            <nav className="navbar">
                <h1>Logo</h1>
                <ul>
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/show'>Show</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout