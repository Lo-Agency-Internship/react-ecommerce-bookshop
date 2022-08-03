import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { backend } from "../util";

const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [change, setChange] = useState(false)
	useEffect(() => {
		const f = async () => getAllBooks()
		f()
	}, []);

	const getAllBooks = async () => {
		setIsLoading(true);
		const {data} = await axios.get(backend("books"), {
			headers:{
			'Authorization':` Bearer ${localStorage.getItem(token)}`
			}
		})
		setIsLoading(false);
		return data
	}

	const getBookById = async (id) => {
		setIsLoading(true);
		const { data } = await axios.get(backend(`books/${id}`))
		console.log(data)
		setIsLoading(false);
		return data
	};

	return (
		<ApiContext.Provider value={{ getAllBooks, getBookById, isLoading, change, setChange }}>
			{children}
		</ApiContext.Provider>
	)
}