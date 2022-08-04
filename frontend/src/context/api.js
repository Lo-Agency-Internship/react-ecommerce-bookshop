import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { backend } from "../util";
import { useNavigate } from "react-router-dom";
import  jwt_decode from "jwt-decode";

const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [change, setChange] = useState(false);
	const [user, setUser] = useState(null);
	console.log({user});
	useEffect(() => {
		const f = async () => getAllBooks()
		f()
		if(!user){
			const token = localStorage.getItem('token');
			console.log('test',token)
			if(!token){
						console.log('test2');
						navigate("/")
					}
					else{
						console.log('enter decode')
						const decoded = jwt_decode(token);
						setUser(decoded)
					}
			
		}

	}, []);

	const getAllBooks = async () => {
		setIsLoading(true);
		const {data} = await axios.get(backend("books"), {
			headers:{
			'Authorization':` Bearer ${localStorage.getItem('token')}`
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
		<ApiContext.Provider value={{ getAllBooks, getBookById, isLoading, change, setChange,setUser,user }}>
			{children}
		</ApiContext.Provider>
	)
}