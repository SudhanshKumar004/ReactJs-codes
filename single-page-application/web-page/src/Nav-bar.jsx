import logo from './assets/logo.png'

function Nav(){
    return(
        <>
        <header>
            <nav className="navbar">
{/* <img src={logo} alt="Description of Image"/> */}
                <h1>Drive Nation </h1>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cars</li>
                    <li>Service</li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav;