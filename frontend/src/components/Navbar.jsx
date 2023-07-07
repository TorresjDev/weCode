import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
			<div className="container-fluid">
				<Link className="nav-link" to="/">
					<img
						src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
						alt="Bootstrap"
						width="30"
						height="24"
						className="mx-1"
					/>
				</Link>
				<div className="collapse navbar-collapse mx-1 text-uppercase fw-bolder" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 ">
						<li className="nav-item ">
							<Link className="nav-link text-info" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link text-info" to="/quotes">
								Quotes
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0 ms-1">
						<li className="nav-item mx-1">
							<Link className="btn btn-light text-warning border-warning" to="/login">
								<div className="material-symbols-outlined" title="Sign In">
									Login
								</div>
								{/* <strong>Login</strong> */}
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link className="btn btn-light text-danger border-danger my-1" to="/register">
								<strong>Create an account</strong>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
