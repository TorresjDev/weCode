import { QuotesContext } from "../context/QuotesContent";
import { useContext } from "react";

export const useQuotesContext = () => {
	const context = useContext(QuotesContext);

	if (!context) {
		throw Error("useQuotesContext must be used inside a Quote");
	}

	return context;
};
