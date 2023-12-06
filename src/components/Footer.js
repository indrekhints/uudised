import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="d-flex justify-content-center">
                    <div className="nav nav-pills">
                        <Link to="/" className=""><h5>Täna</h5></Link> |

                        <Link to="about" className=""><h5>Kontaktid</h5></Link>  |

                    </div>
                </nav>
            </div>

        </footer>
    )
}

export default Footer
