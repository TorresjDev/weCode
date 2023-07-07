import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/quotes/QuoteForm";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login";
import "./app.css";
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";

const loading = () => <div className="">loading....</div>;
function App() {
	return (
		<div className="app bg-light">
			<Suspense fallback={loading}>
				<Navbar />
				<div className="row mt-5">
					<SideBar />
					<div className="col-md-9">
						<main className="pages">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/quotes" element={<Quotes />} />
								<Route path="/quote/new" element={<QuoteForm />} />
								<Route path="/quote/:id" element={<QuoteForm />} />
								<Route path="/login" element={<Login />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>
					</div>
				</div>
			</Suspense>
			<footer className="footer pb-2">footer</footer>
		</div>
	);
}

export default App;
