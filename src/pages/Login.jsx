//import React from 'react'
import login from "../media/login.png";
import google from "../media/google.png";
import "../style/login.css";

const Login = () => {
  return (
    <>
    <div className="login_page">
      <div className="login_img">
        <div className="img">
          <div className="login">
          <h2>Quick Compressor </h2>
          <p>Compress your image quickly </p>
          <div className="google">
            
            <p className="continue">
              <img src={google}></img> Continue with google </p>
              <button>Click me!</button>
          </div>
          </div>
         
        </div>

      </div>
    </div>
    </>
  )
}

export default Login