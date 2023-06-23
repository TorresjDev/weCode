import axios from "axios";

const quotesService = {
	endpoint: `${process.env.API_HOST}/api/quotes`
};

quotesService.getQuotes = () => {
	const config = {
		method: "GET",
		url: quotesService.endpoint,
		withCredentials: true,
		crossdomain: true,
		header: { "Content-Type": "application/json" }
	};
	return axios(config);
};

export default quotesService;
