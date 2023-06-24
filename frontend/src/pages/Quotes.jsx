import React, { useEffect, useState } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import QuoteForm from "../components/quotes/QuoteForm";
import quotesService from "../services/quotesService";

function Quotes() {
	const [quoteState, setQuotes] = useState(null);

	useEffect(() => {
		quotesService.getQuotes().then(onGetQuotesSuccess).catch(onGetQuotesError);
	}, []);

	const onGetQuotesSuccess = (response) => {
		console.log({ response });
		setQuotes(response.data);
	};

	const onGetQuotesError = (error) => {
		console.log({ error });
	};

	return (
		<div className="container-fluid">
			<div className="row gx-3 my-3">
				<div className="col-md-5 mx-auto">
					{quoteState &&
						quoteState.map((quote) => {
							return <QuoteCard key={"quote: " + quote._id} quote={quote} />;
						})}
				</div>
				<div className="col-md-5 mx-auto">
					<QuoteForm />
				</div>
			</div>
		</div>
	);
}

export default Quotes;
