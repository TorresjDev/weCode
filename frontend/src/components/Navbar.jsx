import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
	const user = props.user;
	const handleLogoutClick = (e) => {
		e.preventDefault();
		// console.log();
		props.onLogout();
	};
	return (
		<nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
			<div className="container-fluid">
				<Link className="nav-link weCode" to="/">
					{/* <img
						src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
						alt="Bootstrap"
						width="30"
						height="24"
						className="mx-1"
					/> */}
					<strong>weCode</strong>
				</Link>
				<ul className="navbar-nav mb-2 mb-lg-0 ms-1">
					<li className="pill mx-3">
						<div className="input-group border border-2 rounded border-dark">
							<input
								type="text"
								className="form-control form-control-sm"
								placeholder="search..."
								aria-label=""
								aria-describedby="basic-addon1"
							/>
							<div className="input-group-prepend">
								<button className="btn btn-sm border border-dark " type="button">
									<div className="material-symbols-outlined search-btn " title="">
										manage_search
									</div>
								</button>
							</div>
						</div>
					</li>
				</ul>
				<div
					className="collapse navbar-collapse mx-1 text-uppercase fw-bolder d-flex justify-content-end"
					id="navbarSupportedContent"
				>
					{!user.isLoggedIn ? (
						<ul className="navbar-nav mb-2 mb-lg-0">
							<li className="nav-item mx-1">
								<Link className="btn btn-light text-danger border-danger my-1" to="/register">
									<strong>Create an account</strong>
								</Link>
							</li>
							<li className="nav-item mx-1">
								<Link
									className="btn btn-light text-warning border-warning mt-1"
									to="/login"
									style={{ padding: "1px 3px 1px 2px" }}
								>
									<div className="material-symbols-outlined" title="Sign In" style={{ padding: "3px 3px 1px 2px" }}>
										Login
									</div>
									{/* <strong>Login</strong> */}
								</Link>
							</li>
						</ul>
					) : (
						<div className="user-navbar">
							<p>{user.email}</p>
							<div className="dropdown">
								<button className="dropbox mx-3 px-3 py-1">
									<div className="material-symbols-outlined" title="" style={{ padding: "3px 3px 1px 2px" }}>
										dropdown
									</div>
								</button>
								<div className="dropdown-content">
									<Link className="nav-link" to="/">
										Home
									</Link>
									<Link className="nav-link" to="/quotes">
										Quotes
									</Link>
									<Link className="nav-link logout" to="/login" onClick={handleLogoutClick}>
										Logout
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
