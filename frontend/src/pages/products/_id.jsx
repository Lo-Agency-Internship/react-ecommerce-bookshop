import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../../context/api";

function ProductPage() {
	const {id} = useParams()
	const {getBookById, isLoading} = useApiContext()
	const [book, setBook] = useState(null)

	useEffect(() => {
		getBookById(id).then(setBook)
	}, [])

	if (isLoading)
		return <div  className="mt-12 flex justify-center ">
			LOADING...
		</div>

	return <>
		<div  className="mt-12 flex justify-center ">
			{book && book.title}
		</div>
	</>
}

export default ProductPage;