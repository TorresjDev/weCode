import React from "react";

function QuoteCard({ quote }) {
	return (
		<div className="card m-2 p-3">
			<figure>
				<blockquote class="blockquote">
					<p>{quote.quote}</p>
				</blockquote>
				<figcaption class=" ms-5 blockquote-footer">
					By <cite title="Source Title">{quote.author}</cite>
				</figcaption>
			</figure>
		</div>
	);
}

export default QuoteCard;
