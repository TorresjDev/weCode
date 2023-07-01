import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import quotesService from "../../services/quotesService";
import { useQuotesContext } from "../../hooks/useQuotesContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const basicSchema = Yup.object().shape({
	quote: Yup.string().min(9).max(600).required("Quote is required"),
	author: Yup.string().min(6).required("Author is required"),
	checkbox: Yup.boolean()
});

function QuoteForm() {
	const location = useLocation();
	const navigate = useNavigate();
	const { dispatch } = useQuotesContext();
	const [quoteState, setQuoteState] = useState({
		quote: "",
		author: "",
		rating: 0,
		checkbox: false
	});

	const { state } = location;
	useEffect(() => {
		if (state?.type === "QUOTE_CARD") {
			setQuoteState((prevState) => {
				return { ...prevState, ...state.payload, checkbox: state.payload.rating > 0 ? true : false };
			});
		}
	}, [state]);

	const handleSubmit = (values) => {
		let payload = {};
		let id = quoteState._id;
		setQuoteState((prevState) => {
			return { ...prevState, ...values };
		});
		payload.quote = values.quote;
		payload.author = values.author;
		payload.rating = quoteState.rating > 0 ? quoteState.rating : 0;
		if (!quoteState._id) {
			quotesService.addQuote(payload).then(onAddQuoteSuccess).catch(onAddQuoteError);
		} else {
			quotesService.updateQuote(id, payload).then(onUpdateQuoteSuccess).catch(onUpdateQuoteError);
		}
		console.log("Formik values:", { values }, "state values:", { quoteState }, { payload });
	};

	var onUpdateQuoteSuccess = (response) => {
		dispatch({ type: "UPDATE_QUOTE", payload: response.data });
		console.log({ response });
		toast.success("Quote updated successfully\n \nDirecting you to Quotes page");
		setTimeout(() => {
			navigate("/quotes");
		}, 3000);
	};

	var onUpdateQuoteError = (error) => {
		console.log(error);
		toast.error(`Couldn't update quote\n\n${error.message}`);
	};

	var onAddQuoteSuccess = (response) => {
		dispatch({ type: "CREATE_QUOTE", payload: response.data });
		console.log({ response });
		toast.success("Quote created successfully\n \nDirecting you to Quotes page");
		setTimeout(() => {
			navigate("/quotes");
		}, 3000); //1000 = 1sec
	};

	var onAddQuoteError = (error) => {
		console.log(error);
		toast.error(`Couldn't create quote\n\n${error.message}`);
	};

	false && console.log(quoteState);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 mx-auto my-3">
					<Formik
						enableReinitialize={true}
						initialValues={quoteState}
						onSubmit={handleSubmit}
						validationSchema={basicSchema}
						className=""
					>
						<Form className="border border-3 border-dark bg-secondary text-light rounded-3 shadow-lg m-1 p-3">
							<div className="mb-3 mx-3">
								<label htmlFor="quote" className="form-label">
									Quote
								</label>
								<Field
									as="textarea"
									name="quote"
									className="form-control border border-2 border-dark"
									id="quote"
									aria-describedby="quoteHelp"
								/>
								<ErrorMessage
									name="quote"
									component="div"
									className="ms-3 has-error text-danger"
									style={{ fontWeight: "bold" }}
								/>
							</div>
							<div className="mb-3 mx-3">
								<label htmlFor="author" className="form-label">
									Writer
								</label>
								<Field type="text" name="author" className="form-control border border-2 border-dark" id="author" />
								<ErrorMessage
									name="author"
									component="div"
									className=" ms-3 has-error text-danger"
									style={{ fontWeight: "bold" }}
								/>
							</div>
							<div className="row">
								<div className="col-md-3 mx-5 col-sm-5 mx-2 form-check ">
									<Field
										type="checkbox"
										name="checkbox"
										className="form-check-input border border-2 border-dark"
										id="checkbox"
									/>
									<ErrorMessage name="checkbox" component="div" className="ms-3 has-error text-danger" />
									<label className="form-check-label" htmlFor="checkbox">
										Allow Ratings?
									</label>
								</div>
								<div className="col-md-3 col-sm-1">
									<button type="submit" className="btn btn-primary border border-2 border-dark">
										Submit
									</button>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				theme="dark"
			/>
		</div>
	);
}

export default QuoteForm;
