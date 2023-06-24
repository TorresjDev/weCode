import React from "react";

function QuoteCard({ quote }) {
	return (
		<div className="m-2 px-2 pt-2 border border-1 border-secondary rounded-3 shadow">
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
