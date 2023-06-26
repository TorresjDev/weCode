import React, { useEffect, useState } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import QuoteForm from "../components/quotes/QuoteForm";
import quotesService from "../services/quotesService";
import { useQuotesContext } from "../hooks/useWorkoutsContext";

function Quotes() {
	const { state, dispatch } = useQuotesContext();
	// const [quoteState, setQuotes] = useState({
	// 	quotesArr: [],
	// 	quotesCompts: []
	// });

	useEffect(() => {
		quotesService.getQuotes().then(onGetQuotesSuccess).catch(onGetQuotesError);
	}, []);

	const mapQuotes = (quote) => {
		return <QuoteCard key={"quote: " + quote._id} quote={quote} />;
	};

	const onGetQuotesSuccess = (response) => {
		console.log({ response });
		dispatch({ type: "SET_QUOTES", payload: response.data });
		// setQuotes((prevState) => {
		// 	let qState = { ...prevState };
		// 	qState.quotesArr = response.data;
		// 	qState.quotesCompts = response.data.map((quote) => {
		// 		return <QuoteCard key={"quote: " + quote._id} quote={quote} />;
		// 	});
		// 	return qState;
		// });
	};

	const onGetQuotesError = (error) => {
		console.log({ error });
	};
	console.log({ state });

	return (
		<div className="container-fluid">
			<div className="row gx-1 my-3">
				<div className="col-md-5 mx-auto">{state.quotes && state.quotes.map(mapQuotes)}</div>
				{/* state.quotes.map(mapQuotes) */}
				<div className="col-md-5 mx-auto">
					<QuoteForm updateQState={onGetQuotesSuccess} />
				</div>
			</div>
		</div>
	);
}

export default Quotes;
