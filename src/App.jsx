import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Compress from "./pages/Compress";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";

import "./style/global.css";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, selectUser } from "./redux/slices/userSlice";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
	const dispatch = useDispatch();
	const { user, isAuthenticated } = useSelector(selectUser);

	const getProfileInformation = async () => {
		dispatch(getProfile());
	};

	useEffect(() => {
		if (isAuthenticated === true) {
			toast.success(`Loged in as ${user.name}`);
		}
		getProfileInformation();
	}, [isAuthenticated]);

	return (
		<Router>
			<Navbar />
			<Toaster />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/compress' element={<Compress />} />
				<Route path='/uploaded-images' element={<Download />} />
				<Route path='/login' element={<Login />} />
				<Route path='/*' element={<Error />} />
				<Route path='/feedback' element={<Feedback />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>

			<Footer />
		</Router>
	);
};

export default App;
