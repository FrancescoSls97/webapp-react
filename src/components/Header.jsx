import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light p-3">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">My Movies Site</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item"><a href="" className="nav-link">Movies</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
