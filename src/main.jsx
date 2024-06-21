import React from "react";

import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	   <GoogleOAuthProvider clientId="315243322628-jht43tgj4ce45dk945b6f400re7nqhor.apps.googleusercontent.com">
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>
);

// export const base_url = "http://localhost:8080";


export const base_url = "https://quickcompress-server.vercel.app";

