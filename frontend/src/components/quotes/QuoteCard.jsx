import React from "react";
import { useQuotesContext } from "../../hooks/useQuotesContext";
import quotesService from "../../services/quotesService";

function QuoteCard({ quote }) {
	const { dispatch } = useQuotesContext();

	const handleDelete = () => {
		quotesService
			.deleteQuote(quote._id)
			.then(() => {
				dispatch({ type: "DELETE_QUOTE", payload: quote });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div
			className="card m-2 px-2 pt-2 border border-3 border-dark rounded-3 shadow-lg d-flex"
			style={{ height: "12rem", overflowY: "auto" }}
		>
			<div className="card-body p-1">
				<figure className="quote-card">
					<blockquote className="blockquote text-dark">
						<strong>
							<p>{quote.quote}</p>
						</strong>
					</blockquote>
					<figcaption className=" ms-5 blockquote-footer">
						By{" "}
						<cite className="text-dark" title="Author">
							{quote.author}
						</cite>
					</figcaption>
				</figure>
			</div>
			<div className="card-footer">
				<div className="col-md-5 ms-auto mb-1 ">
					<div className="mx-auto btn btn-outline-warning">Edit</div>
					<div className=" ms-2 btn btn-outline-danger" onClick={handleDelete}>
						Delete
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuoteCard;
