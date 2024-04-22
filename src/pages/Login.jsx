//import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import login from "../media/login.png";
import google from "../media/google.png";
import "../style/login.css";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import axios from "axios";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const register = async () => {
		try {
            console.log('registre');
			const res = await axios.post(
				"http://localhost:8080/api/user/google/signup",
				{
					name,
					email,
					profilePic,
				}
			);
			console.log(res.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSignup = (credentialResponse) => {
		let decoded = jwtDecode(credentialResponse.credential);
		let name2 = decoded.given_name + " " + decoded.family_name;


        setName(name2)
        setEmail(decoded.email)
        setProfilePic(decoded.picture)
        register()


		// register()
		console.log();
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
						<h2>Login Benifits</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
