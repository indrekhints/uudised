
import { Link, NavLink } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                    </div>
                    <div className="nav nav-pills">
                        <Link to="/" className="">Täna </Link> |
                        <Link to="about" className="">Kuuluta | Kontaktid | Info</Link>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
