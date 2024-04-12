import React from "react";

import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="181727105626-juff5vov439lbm54s55hjo0pstnmqas7.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
