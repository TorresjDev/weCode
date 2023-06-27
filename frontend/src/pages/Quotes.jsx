import React, { useEffect, useState } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import QuoteForm from "../components/quotes/QuoteForm";
import quotesService from "../services/quotesService";
import { useQuotesContext } from "../hooks/useWorkoutsContext";

function Quotes() {
	const { state, dispatch } = useQuotesContext();

	useEffect(() => {
		quotesService.getQuotes().then(onGetQuotesSuccess).catch(onGetQuotesError);
	}, []);

	const mapQuotes = (quote, index) => {
		return (
			<div key={`quote: ${index}/${quote._id}`} className="col-md-4 mx-auto">
				<QuoteCard quote={quote} />
			</div>
		);
	};

	const onGetQuotesSuccess = (response) => {
		console.log({ response });
		dispatch({ type: "SET_QUOTES", payload: response.data });
	};

	const onGetQuotesError = (error) => {
		console.log({ error });
	};

	return (
		<div className="container-fluid">
			<div className="col-md-7 mx-auto mt-3">
				<QuoteForm updateQState={onGetQuotesSuccess} />
			</div>
			<div className="row gx-1 my-3 bg-light border border-3 border-dark rounded">
				{state.quotes && state.quotes.map(mapQuotes)}
			</div>
		</div>
	);
}

export default Quotes;
