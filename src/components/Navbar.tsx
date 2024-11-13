import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface NavbarProps {
    titleName: string;
    imageSrc: string;
}
function Navbar({ imageSrc }: NavbarProps) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={imageSrc} width="85" height="60" className="d-inline-block align-center" alt="" />
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarItems"
                    aria-controls="navbarItems"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarItems">
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About us
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                            href="#"
                            id="navbarDarkDropdownMenuLink" 
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar