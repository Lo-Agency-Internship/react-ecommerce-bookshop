import { createContext, useContext, useState } from "react";
import axios from "axios"
import { backend } from "../util";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

	const [user, setUser] = useState(null);

	const getUserInfo = async () => {
		// setIsLoading(true);
		// const {data} = await axios.post(backend("auth/login"), {email, password})
		// setIsLoading(false);

		// data.token = // ey.......

		// decode the token
		// {sub: ..., role: '', ...}
		const token = localStorage.getItem(token);
		const decoded = jwt_decode(accessToken);
        console.log('hope',decoded);
		//setUser(decode)

		setUser(decodedToken)

		localStorage.setItem("token", data.token)

		return data
	}

	const SingUp = async ({username, password}) => {}

	return (
		<UserContext.Provider value={{ getAllBooks, getBookById, isLoading }}>
			{children}
		</UserContext.Provider>
	)
}