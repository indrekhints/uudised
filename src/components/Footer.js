import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="d-flex justify-content-center">
                    <div className="nav nav-pills">
                        <Link to="/" className="">Täna</Link> |

                        <Link to="about" className="">Kontaktid</Link>  |

                    </div>
                </nav>
            </div>

        </footer>
    )
}

export default Footer
