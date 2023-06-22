import React from 'react'
import { Link} from "react-router-dom";

function Navbar() {
  return (
		<nav className="navbar navbar-expand-lg bg-dark bg-gradient">
			<div className="container-fluid">
				<img
					src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
					alt="Bootstrap"
					width="30"
					height="24"
					className="mx-1"
				/>

				<div className="collapse navbar-collapse mx-1 text-uppercase fw-bolder" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
						<li className="nav-item">
							<Link className="nav-link text-info" to="/">
								Home
							</Link>
						</li>
						{/* <li className="nav-item"><a className="nav-link" >Link</a></li> */}
					</ul>

					<ul className="navbar-nav mb-2 mb-lg-0 ms-1">
						<li className="nav-item">
							<Link className="nav-link text-info" to="/">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-info" to="/">
								Register
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar