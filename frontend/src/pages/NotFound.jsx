// import { Link } from "react-router-dom";
import SiteLogo from "../images/site-unavailable-xsm.jpg";
import React from "react";

const NotFound = () => {
	const imgStyle = {
		width: "45%",
		height: "39%",
		alignSelf: "center"
	};

	return (
		<div className="container-fluid h-100">
			<div className="row">
				<div className="col-md-9 mx-auto ">
					<div className="card m-3 shadow border rounded-2 text-center">
						<div className="card-header">Site Not Available</div>
						<img style={imgStyle} src={SiteLogo} alt="" className="my-2 card-img-top img-fluid border rounded-3" />
						<div className="card-body">
							<div className="card-text my-3">Sorry, Page not found</div>
							<button className="btn btn-outline-danger mb-3">Return Home</button>
							<div className="card-footer">source not found</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
