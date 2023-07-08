import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const passwordSchema = Yup.string()
	.min(6, "Password must be at least 6 characters")
	.max(15, "Password must be at most 15 characters")
	.matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/,
		"Password must contain at least a uppercase letter, a lowercase letter,a number, and a symbol"
	)
	.required("Password is required");

const basicSchema = Yup.object().shape({
	email: Yup.string().email().required("Email is required"),
	password: passwordSchema
});

function Login() {
	const [loginState, setLoginState] = useState({
		email: "",
		password: "",
		rememberMe: false
	});

	const handleSubmit = (values) => {
		setLoginState((prevState) => {
			return { ...prevState, ...values };
		});
		console.log("Formik values:", { values }, "Local state values:", { loginState });
	};

	return (
		<div className="container-fluid h-100">
			<div className="row h-100 g-auto">
				<div className="col-md-6  col-sm-6 mx-auto my-2">
					<Formik initialValues={loginState} onSubmit={handleSubmit} validationSchema={basicSchema}>
						<Form className="border border-3 border-secondary rounded-3 shadow-lg m-1 p-3">
							<div className="m-3 form-floating">
								<Field type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
								<label htmlFor="email" className="form-label text-dark">
									Email address
								</label>
								<ErrorMessage name="email" component="div" className="ms-3 has-error text-danger" />
							</div>
							<div className="m-3 form-floating">
								<Field type="password" name="password" className="form-control" id="password" />
								<label htmlFor="password" className="form-label text-dark">
									Password
								</label>
								<ErrorMessage name="password" component="div" className="ms-3 has-error text-danger" />
							</div>
							<div className="row">
								<div className="col-md-3 mx-5 col-sm-5 mx-2 form-check">
									<Field
										type="checkbox"
										name="rememberMe"
										className="form-check-input border-2 border-secondary"
										id="rememberMe"
									/>
									<label className="form-check-label" htmlFor="rememberMe">
										Remember Me?
									</label>
								</div>
								<div className="col-md-3 col-sm-1">
									<button type="submit" className="btn btn-primary">
										Submit
									</button>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default Login;
