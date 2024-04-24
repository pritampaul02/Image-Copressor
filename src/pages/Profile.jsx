import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const Profile = () => {
	const { user } = useSelector(selectUser);
  useEffect(() => {
    
  }, [user])
  
	return (
		<div>
			<h1>profile</h1>
			<h1>{user?.name}</h1>
		</div>
	);
};

export default Profile;
