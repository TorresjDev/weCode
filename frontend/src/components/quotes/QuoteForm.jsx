import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import quotesService from "../../services/quotesService";
import { useQuotesContext } from "../../hooks/useWorkoutsContext";

const basicSchema = Yup.object().shape({
	quote: Yup.string().min(9).max(600).required("Quote is required"),
	author: Yup.string().min(6).required("Author is required"),
	checkbox: Yup.boolean()
});

function QuoteForm() {
	const { dispatch } = useQuotesContext();
	const [quoteState, setQuoteState] = useState({
		quote: "",
		author: "",
		rating: 0,
		checkbox: false
	});

	const handleSubmit = (values) => {
		let payload = {};
		setQuoteState((prevState) => {
			return { ...prevState, ...values };
		});
		payload.quote = values.quote;
		payload.author = quoteState.author;
		payload.rating = 0;
		quotesService.addQuote(payload).then(onAddQuoteSuccess).catch(onAddQuoteError);

		console.log("Formik values:", { values }, "Local state values:", { quoteState });
	};

	var onAddQuoteSuccess = (response) => {
		dispatch({ type: "CREATE_QUOTE", payload: response.data });
		console.log(response);
	};

	var onAddQuoteError = (error) => {
		console.log(error);
	};

	false && console.log(quoteState);

	return (
		<Formik initialValues={quoteState} onSubmit={handleSubmit} validationSchema={basicSchema}>
			<Form className="border border-3 border-secondary rounded-3 shadow-lg m-1 p-3">
				<div className="mb-3 mx-3">
					<label htmlFor="quote" className="form-label">
						Quote
					</label>
					<Field as="textarea" name="quote" className="form-control" id="quote" aria-describedby="quoteHelp" />
					<ErrorMessage name="quote" component="div" className="ms-3 has-error text-danger" />
					<div id="quoteHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3 mx-3">
					<label htmlFor="author" className="form-label">
						Writer
					</label>
					<Field type="text" name="author" className="form-control" id="author" />
					<ErrorMessage name="author" component="div" className="ms-3 has-error text-danger" />
				</div>
				<div className="row">
					<div className="col-md-3 mx-5 col-sm-5 mx-2 form-check">
						<Field type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
						<ErrorMessage name="checkbox" component="div" className="ms-3 has-error text-danger" />
						<label className="form-check-label" htmlFor="checkbox">
							Allow Ratings?
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
	);
}

export default QuoteForm;
