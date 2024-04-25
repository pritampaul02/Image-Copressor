import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import "../style/profile.css";

const Profile = () => {
	const { user } = useSelector(selectUser);
  useEffect(() => {
    
  }, [user])
  
	return (
		<>
		   {/* <div> */}
		   {/* <h1>profile</h1> */}
		   {/* <h1>{user?.name}</h1> */}
		   {/* </div> */}

		  <div className="profile">
		    <div className="profile_box">
		       <div className="profile_image">
				 </div>
			
			 </div>	
		  </div>
		    
		</>
	);
};

export default Profile;
