import React from "react";

import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider clientId='181727105626-juff5vov439lbm54s55hjo0pstnmqas7.apps.googleusercontent.com'>
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>
);

export const base_url = "http://localhost:8080";
