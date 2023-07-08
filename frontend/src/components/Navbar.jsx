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
						<li className="nav-item mx-3">
							<div className="input-group border border-2 rounded border-dark">
								<input
									type="text"
									className="form-control"
									placeholder="search..."
									aria-label=""
									aria-describedby="basic-addon1"
								/>
								<div className="input-group-prepend">
									<button className="btn btn-info border border-dark" type="button">
										Button
									</button>
								</div>
							</div>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0 ms-1">
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
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
