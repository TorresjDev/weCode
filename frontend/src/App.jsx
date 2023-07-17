import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/quotes/QuoteForm";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login";
import "./app.css";
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const loading = () => <div className="">loading....</div>;
function App() {
	const [state, setState] = useState({
		email: "unknown@test.com",
		fullName: "Unknown User",
		age: new Date(),
		contactNumber: "+1(661)543-4350",
		address: "",
		isLoggedIn: true
	});

	false && console.log(state, setState);

	return (
		<div className=" container-fluid app bg-light">
			<Suspense fallback={loading}>
				<Navbar user={state} />
				<div className="row app-body">
					<SideBar user={state} />
					<div className="col-md-10 ">
						<main className="pages ">
							<Routes>
								<Route path="/" element={<Home user={state} />} />
								<Route path="/quotes" element={<Quotes />} />
								<Route path="/quote/new" element={<QuoteForm />} />
								<Route path="/quote/:id" element={<QuoteForm />} />
								<Route path="/login" element={<Login />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>
					</div>
				</div>
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
