//import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import login from "../media/login.png";
import google from "../media/google.png";
import "../style/login.css";

const Login = () => {
    return (
        <>
            <div className="login_page">
                <div className="login_img">
                    <div className="img" id ="googlelogin">
                        <div className="login">
                            <h2>Quick Compressor </h2>
                            <p>Compress your image quickly </p>
                            <GoogleLogin className="button"
                                onSuccess={(credentialResponse) => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                            />
                        </div>
                    </div>
                    <div className="img" id ="benifit">
                        <h2>Login Benifits</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
