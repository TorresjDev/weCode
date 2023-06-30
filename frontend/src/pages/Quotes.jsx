import React, { useEffect, useCallback } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import quotesService from "../services/quotesService";
import { useQuotesContext } from "../hooks/useQuotesContext";
import { Link } from "react-router-dom";

function Quotes() {
	const { state, dispatch } = useQuotesContext();

	const mapQuotes = (quote, index) => {
		return (
			<div key={`quote: ${index}/${quote._id}`} className="col-md-4 mx-auto">
				<QuoteCard quote={quote} />
			</div>
		);
	};

	const onGetQuotesSuccess = useCallback(
		(response) => {
			console.log({ response });
			return dispatch({ type: "SET_QUOTES", payload: response.data });
		},
		[dispatch]
	);

	const onGetQuotesError = useCallback((error) => {
		console.log({ error });
	}, []);

	useEffect(() => {
		quotesService.getQuotes().then(onGetQuotesSuccess).catch(onGetQuotesError);
	}, [onGetQuotesSuccess, onGetQuotesError]);

	return (
		<div className="container-fluid">
			<div className="row m-3 py-1 rounded shadow">
				<div className="col-md-1 mx-1 pt-1">
					<Link to="/quote/new" className="btn py-1 btn-outline-success border-3 shadow">
						<div title="add a quote" className="pt-2 material-symbols-outlined">
							Add_Comment
						</div>
					</Link>
				</div>
				<div className="col-md-1 pt-2">
					<h3>Quotes</h3>
				</div>
				<div className="col-md-4 mx-auto mt-1">
					<div class="input-group pt-auto shadow border border-2 rounded border-dark ">
						<input type="text" class="form-control" placeholder="search..." aria-label="" aria-describedby="basic-addon1" />
						<div class="input-group-prepend">
							<button class="btn btn-info border border-dark" type="button">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row gx-1 my-3 bg-light border border-3 border-dark rounded">
				{state.quotes && state.quotes.map(mapQuotes)}
			</div>
		</div>
	);
}

export default Quotes;
