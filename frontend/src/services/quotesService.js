import axios from "axios";

const quotesService = {
	endpoint: `${process.env.REACT_APP_API_HOST}/api/quotes`
};

quotesService.getQuotes = () => {
	const config = {
		method: "GET",
		url: quotesService.endpoint,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

quotesService.getQuoteById = (id) => {
	const config = {
		method: "GET",
		url: `${quotesService.endpoint}/${id}`,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

quotesService.addQuote = (payload) => {
	const config = {
		method: "POST",
		url: quotesService.endpoint,
		data: payload,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

export default quotesService;
