import React from "react";

function QuoteCard({ quote }) {
	return (
		<div className="card m-2 px-2 pt-2 border border-1 border-secondary rounded-3 shadow d-flex">
			<figure className="">
				<blockquote className="blockquote">
					<p>{quote.quote}</p>
				</blockquote>
				<figcaption className=" ms-5 blockquote-footer">
					By <cite title="Author">{quote.author}</cite>
				</figcaption>
			</figure>
			<div className="col-md-4 ms-auto mb-1">
				<div className="mx-1 btn btn-outline-warning">Edit</div>
				<div className=" ms-1 btn btn-outline-danger">Delete</div>
			</div>
		</div>
	);
}

export default QuoteCard;
