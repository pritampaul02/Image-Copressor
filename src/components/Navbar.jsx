import { Link, useLocation } from "react-router-dom";

import profile from "../media/image.png";

import "../style/navbar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
	const activeLocation = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);

	const { isAuthenticated, status } = useSelector(selectUser);

	console.log("akkaka", isAuthenticated);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status.logoutStatus === "success") {
			toast.success("Logout Success");
		}
	}, [isAuthenticated]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	return (
		<header className='navber'>
			<Link to='/' className='logo'>
				Logo
			</Link>
			{/* <div className="menu"> */}
			<div className='menuContainer'>
				<Link to='/' className={activeLocation === "/" ? "menuActive" : ""}>
					Home
					<span></span>
				</Link>
				<Link
					to='/about'
					className={activeLocation === "/about" ? "menuActive" : ""}
				>
					About
					<span></span>
				</Link>
				<Link
					to='/uploaded-images'
					className={activeLocation === "/uploaded-images" ? "menuActive" : ""}
				>
					Uploaded Image
					<span></span>
				</Link>

				{isAuthenticated ? (
					<li onClick={() => dispatch(logout())} className='menu-item'>
						Logout
					</li>
				) : (
					<Link
						to='/login'
						className={activeLocation === "/login" ? "menuActive" : ""}
					>
						Login
						<span></span>
					</Link>
				)}
				<Link onClick={toggleMenu} className='profileContainer' to='/'>
					<img src={profile} alt='' />
				</Link>

				<ul className={`menu  ${isOpen ? "show" : "hidden"}`}>
					<li className='menu-item'>
						<Link
							to='/profile'
							className={activeLocation === "/login" ? "menuActive" : ""}
						>
							Go to profile
						</Link>
					</li>
				</ul>
			</div>
			{/* </div> */}
		</header>
	);
};

export default Navbar;
