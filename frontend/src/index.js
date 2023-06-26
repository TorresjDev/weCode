import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/js/bootstrap";
// import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { QuotesContextProvider } from "./context/QuotesContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QuotesContextProvider>
				<App />
			</QuotesContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
