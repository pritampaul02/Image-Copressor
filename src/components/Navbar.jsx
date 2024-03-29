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
                </Link>
                <Link
                    to="/about"
                    className={activeLocation === "/about" ? "menuActive" : ""}
                >
                    About
                </Link>
                <Link className="profileContainer" to="/">
                    <img src={profile} alt="" />
                </Link>
            </div>
            {/* </div> */}
        </header>
    );
};

export default Navbar;
