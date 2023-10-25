import "./Navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <div className="enlaces">
                <div className="icono">
                    <Link to="/">Home</Link>

                </div>

                <Link to="/contacto">Contacto</Link>
            </div>
            <div>
                Happy Cake
            </div>
        </nav>
    )
}

export default NavBar