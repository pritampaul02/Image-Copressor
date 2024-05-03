import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import "../style/profile.css";

const Profile = () => {
    const { user } = useSelector(selectUser);

    const createAt = user.createdAt;
    const date = createAt.split("T");
    console.log(date);
    console.log(date[0]);

    useEffect(() => {
        // console.log(user);
    }, [user]);

    return (
        <>
            {/* <div> */}
            {/* <h1>profile</h1> */}
            {/* <h1>{user?.name}</h1> */}
            {/* </div> */}

            <div className="profile">
                <div className="profile_box">
                    <img
                        className="profile_image"
                        src={user.profilePic}
                        alt={user.name}
                    />

                    <h2>{user.name}</h2>
                    <p>{user.email}</p>

                    <p>Join at {date[0]}</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
