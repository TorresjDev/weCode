import React, { useState } from "react";

function Login() {
	const [loginState, setLoginState] = useState({
		email: "",
		password: ""
	});

	const handleFormField = (e) => {
		const { value, name } = e.target;
		setLoginState((prevState) => {
			const newState = { ...prevState };
			newState[name] = value;
			return newState;
		});
	};

	false && console.log(loginState);

	return (
		<div className="container-fluid h-100">
			<div className="row h-100 g-auto">
				<div className="col-md-12"></div>
				<div className="col-md-6 mx-auto my-2">
					<form className="border border-3 border-secondary rounded-3 shadow-lg m-1 p-3">
						<div className="m-3 form-group">
							<label for="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								name="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={handleFormField}
							/>
							<div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="m-3 form-group">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								name="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={handleFormField}
							/>
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
				<div className="col-md-12"></div>
			</div>
		</div>
	);
}

export default Login;
