import axios from "axios";

const quotesService = {
	endpoint: `${process.env.REACT_APP_API_HOST}/api/quotes`
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

quotesService.getQuotes = () => {
	const config = {
		method: "GET",
		url: quotesService.endpoint,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

quotesService.getQuote = (id) => {
	const config = {
		method: "GET",
		url: `${quotesService.endpoint}/${id}`,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

quotesService.updateQuote = (id, payload) => {
	const config = {
		method: "PUT",
		url: `${quotesService.endpoint}/${id}`,
		data: payload,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

quotesService.deleteQuote = (id) => {
	const config = {
		method: "DELETE",
		url: `${quotesService.endpoint}/${id}`,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

export default quotesService;
