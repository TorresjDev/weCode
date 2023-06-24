import React, { useEffect, useState } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import QuoteForm from "../components/quotes/QuoteForm";
import quotesService from "../services/quotesService";

function Quotes() {
	const [quoteState, setQuotes] = useState({
		quotesArr: [],
		quotesCompts: []
	});

	useEffect(() => {
		quotesService.getQuotes().then(onGetQuotesSuccess).catch(onGetQuotesError);
	}, []);

	const onGetQuotesSuccess = (response) => {
		console.log({ response });
		setQuotes((prevState) => {
			let qState = { ...prevState };
			qState.quotesArr = response.data;
			qState.quotesCompts = response.data.map((quote) => {
				return <QuoteCard key={"quote: " + quote._id} quote={quote} />;
			});
			return qState;
		});
	};

	const onGetQuotesError = (error) => {
		console.log({ error });
	};

	return (
		<div className="container-fluid">
			<div className="row gx-1 my-3">
				<div className="col-md-5 mx-auto">{quoteState.quotesArr && quoteState.quotesCompts}</div>
				<div className="col-md-5 mx-auto">
					<QuoteForm updateQState={onGetQuotesSuccess} />
				</div>
			</div>
		</div>
	);
}

export default Quotes;
