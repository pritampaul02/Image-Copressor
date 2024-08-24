//import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import "../style/login.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, selectUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const { isAuthenticated } = useSelector(selectUser);
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) {
            navigate('/')
        }
		handleRegister()
	}, [isAuthenticated, profilePic]);

	const handleRegister = () => {
		if (name && email && profilePic) {
			dispatch(register({ name, email, profilePic }));
		}
	};

	const handleSignup = (credentialResponse) => {
		let decoded = jwtDecode(credentialResponse.credential);
		let name2 = decoded.given_name + " " + decoded.family_name;

		setName(name2);
		setEmail(decoded.email);
		setProfilePic(decoded.picture);
	};

	return (
		<>
			<div className='login_page'>
				<div className='login_img'>
					<div className='img' id='googlelogin'>
						<div className='login'>
							<h2>Quick Compressor </h2>
							<p>Compress your image quickly </p>
							<GoogleLogin
								className='button'
								onSuccess={handleSignup}
								onError={() => {
									console.log("Login Failed");
								}}
							/>
						</div>
					</div>
					<div className='img' id='benifit'>
					    <h3>you will get the following benefits if you login</h3>
						<p>First you will see all the compresed images in album from</p>
					</div>
				</div>
			</div>


			{/* <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10px,
                }}
					reader.onload = function (e) {
				setImageData(e.target.result);
				setImgPreview(e.target.result);
                console.log(e.target.result);
			};

			     <button
                        type="submit"
                        className="btn-compress btnCompress-primary"
                    >
                        Compress
                    </button>
            >
				<div className='login_page'>
					<div className='login_img'>
						<div className='img' id='googlelogin'>
							<div className='login'>
								<h2>Quick Compressor </h2>
								<p>Compress your image quickly </p>
								<GoogleLogin
									className='button'
									onSuccess={handleSignup}
									onError={() => {
										console.log("Login Failed");
									}}
								/>
							</div>
						</div>
						<div className='img' id='benifit'>
							<h3>you will get the following benefits if you login</h3>
							<p>First you will see all the compresed images in album from</p>
						</div>
					</div>
				</div> 

             </div> */}
		</>
	);
};

export default Login;
