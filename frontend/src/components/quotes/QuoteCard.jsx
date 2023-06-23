import React from "react";

function QuoteCard({ quote }) {
	return (
		<div className="card m-2 p-3 border border-1 border-secondary rounded-3 shadow">
			<figure>
				<blockquote className="blockquote">
					<p>{quote.quote}</p>
				</blockquote>
				<figcaption className=" ms-5 blockquote-footer">
					By <cite title="Author">{quote.author}</cite>
				</figcaption>
			</figure>
		</div>
	);
}

export default QuoteCard;
