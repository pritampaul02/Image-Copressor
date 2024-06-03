import { Link, useLocation, useNavigate } from "react-router-dom";

import profile from "../media/image.png";
import defaultprofile from "../media/DefaultProfile01.jpg"

import "../style/navbar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import logo from "../media/logo.png";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const activeLocation = useLocation().pathname;
    // const [isOpen, setIsOpen] = useState(false);

    const { isAuthenticated, status, user } = useSelector(selectUser);

    console.log("akkaka", isAuthenticated);
    const dispatch = useDispatch();
    console.log(user);
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (status.logoutStatus === "success") {
            toast.success("Logout Success");
        }
        if (!isAuthenticated) {
            navigate("/compress");
        }
    }, [isAuthenticated]);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    //     console.log(isOpen);
    // };

    return (
        <header className="navber">
            <Link to="/" className="logo_container">
                <img
                    src={logo}
                    alt="Compresso - The ultimate image compressor"
                    className="logo"
                />
            </Link>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                }}
            >
                <Link
                    // onClick={toggleMenu}
                    className="profileContainer mobile"
                    to="/profile"
                >
                    {isAuthenticated ? (
                        <img src={user.profilePic} alt="" />
                    ) : (
                        <img src={defaultprofile} alt="" />
                    )}
                </Link>
                <div
                    className="hamberger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <HiOutlineMenuAlt3 style={{ fontSize: "27px" }} />
                    ) : (
                        <HiOutlineMenu style={{ fontSize: "27px" }} />
                    )}
                </div>
            </div>

            {/* <div className="menu"> */}
            <div className={`menuContainer ${menuOpen ? "active" : ""}`}>
                {/* <Link
                    to="/"
                    className={activeLocation === "/" ? "menuActive" : ""}
                >
                    Home
                    <span></span>
                </Link> */}
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
                    Saved Image
                    <span></span>
                </Link>

                {isAuthenticated ? (
                    <li onClick={() => dispatch(logout())} className="loginBtn">
                        <BiLogOutCircle
                            style={{ marginRight: "5px", fontWeight: "700" }}
                        />{" "}
                        Logout
                    </li>
                ) : (
                    <Link to="/login" className="loginBtn">
                        <BiLogInCircle
                            style={{ marginRight: "5px", fontWeight: "700" }}
                        />{" "}
                        Login
                        <span></span>
                    </Link>
                )}
                <Link
                    // onClick={toggleMenu}
                    className="profileContainer"
                    to="/profile"
                >
                    {isAuthenticated ? (
                        <img src={user.profilePic} alt="" />
                    ) : (
                        <img src={defaultprofile} alt="" />
                    )}
                </Link>

                {/* <ul className={`menu  ${isOpen ? "show" : "hidden"}`}> */}
                {/* <li className='menu-item'>
						<Link
							to='/profile'
							className={activeLocation === "/login" ? "menuActive" : ""}
						>
							Go to profile
						</Link>
					</li> */}
                {/* </ul> */}
            </div>
            {/* </div> */}
        </header>
    );
};

export default Navbar;
