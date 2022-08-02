import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/molecules/product";
import { useApiContext } from "../../context/api";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";

function ProductPage() {
	const {id} = useParams()
	const {getBookById} = useApiContext()
	const [book, setBook] = useState({})

	useEffect(() => {
		getBookById(id).then(setBook)
	}, [])

	return <>
			<Navbar/>
			<Products bookInfos={book} />
			<Footer/>
	</>
}

export default ProductPage;