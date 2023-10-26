import "./Navbar.css"
import { FcHome, FcContacts } from 'react-icons/fc'
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="container-fluid w-auto">

            <div className="enlaces">
                <div className="icono">
                    <FcHome />
                    <Link to="/">Home</Link>
                </div>
                <div className="icono">

                    <FcContacts />
                    <Link to="/contacto">Contacto</Link>
                </div>

            </div>
            <div className="nombre">
                <div>Happy Cake</div>
                <img className="cake" src="/src/assets/cake-cup-color-icon.svg" alt="Imagen de torta" />
            </div>
        </nav>
    )
}

export default NavBar