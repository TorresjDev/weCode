import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login";
import "./app.css";

function App() {
	return (
		<div className="app bg-light">
			<Navbar />

			<div className="pages">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quotes" element={<Quotes />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
