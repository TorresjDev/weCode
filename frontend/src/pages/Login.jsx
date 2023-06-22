import React from "react";

function Login() {
	return (
		<div className="container-fluid">
			<div className="row g-auto">
				<div className="col-md-6 mx-auto my-2">
					<form className="border border-3  border-secondary rounded-3 shadow-lg m-1 p-3">
						<div className="m-3 form-group">
							<label for="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="m-3 form-group">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" for="exampleCheck1">
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
