import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/slices/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { user, isAuthenticated } = useSelector(selectUser);
	return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
