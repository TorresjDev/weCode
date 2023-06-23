import React, { useEffect, useState } from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import QuoteForm from "../components/quotes/QuoteForm";

function Quotes() {
	const [quoteState, setQuotes] = useState(null);

	useEffect(() => {
		const fetchQuotes = async () => {
			const response = await fetch("/api/quotes");
			const json = await response.json();

			if (response.ok) {
				setQuotes(json);
			}
		};

		fetchQuotes();
	}, []);

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
