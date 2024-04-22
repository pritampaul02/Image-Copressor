
import { Link, useLocation } from "react-router-dom";

import profile from "../media/image.png";

import "../style/navbar.css";

const Navbar = () => {
    const activeLocation = useLocation().pathname;

    return (
        <header className="navber">
            <Link to="/" className="logo">
                Logo
                
            </Link>
            {/* <div className="menu"> */}
            <div className="menuContainer">
                <Link
                    to="/"
                    className={activeLocation === "/" ? "menuActive" : ""}
                >
                    Home
                    <span></span>
                </Link>
                <Link
                    to="/about"
                    className={activeLocation === "/about" ? "menuActive" : ""}
                >
                    About
                    <span></span>
                </Link>
                <Link
                    to="/uploaded-images"
                    className={
                        activeLocation === "/uploaded-images"
                            ? "menuActive"
                            : ""
                    }
                >
                    Uploaded Image
                    <span></span>
                </Link>
                <Link
                    to="/login"
                    className={activeLocation === "/login" ? "menuActive" : ""}
                >
                    Login
                    <span></span>
                </Link>

                <Link className="profileContainer" to="/">
                    <img src={profile} alt="" />
                </Link>

                
                <ul className="menu">
                    <li className="menu-item">
                      <Link
                    to="/profile"
                    className={activeLocation === "/login" ? "menuActive" : ""}
                >
                     Go to profile
                </Link>
                </li>
                    <li className="menu-item">Logout</li>
                </ul>
                
            </div>
            {/* </div> */}
        </header>
    );
};

export default Navbar;
