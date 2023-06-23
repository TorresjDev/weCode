import React, { useState } from "react";
import "./quotes.css";
function QuoteForm() {
	const [quoteState, setQuoteState] = useState({
		quote: "",
		author: "",
		rating: 0,
		checkbox: false
	});

	const handleFormField = (e) => {
		// debugger;
		const { value, name } = e.target;
		setQuoteState((prevState) => {
			const newState = { ...prevState };
			if (!e.target.checked) {
				newState[name] = value;
			} else {
				newState.checkbox = e.target.checked;
			}
			return newState;
		});
	};
	false && console.log(quoteState);

	return (
		<form className="border border-3 border-secondary rounded-3 shadow-lg m-1 p-3">
			<div className="mb-3 mx-3">
				<label htmlFor="quote" className="form-label">
					Quote
				</label>
				<textarea
					name="quote"
					className="form-control"
					id="quote"
					aria-describedby="quoteHelp"
					onChange={handleFormField}
				/>
				<div id="quoteHelp" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className="mb-3 mx-3">
				<label htmlFor="author" className="form-label">
					Writer
				</label>
				<input type="text" name="author" className="form-control" id="author" onChange={handleFormField} />
			</div>
			<div className="mb-3 mx-4 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="rating"
					// checked={quoteState.checkout}
					onChange={handleFormField}
				/>
				<label className="form-check-label" htmlFor="rating">
					Allow Ratings?
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default QuoteForm;
