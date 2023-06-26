import { createContext, useReducer } from "react";

export const QuotesContext = createContext();

export const quotesReducer = (state, action) => {
	// console.log(state, action);

	switch (action.type) {
		case "SET_QUOTES":
			return {
				quotes: action.payload
			};
		case "CREATE_QUOTE":
			return {
				quotes: [action.payload, ...state.quotes]
			};
		default:
			return state;
	}
};

export const QuotesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(quotesReducer, {
		quotes: null
	});
	// console.log(children, state);

	return <QuotesContext.Provider value={{ state, dispatch }}>{children}</QuotesContext.Provider>;
};
