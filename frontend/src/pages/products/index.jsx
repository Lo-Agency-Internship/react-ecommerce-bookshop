import Footer from "../../components/organisms/footer";
import Navbar from "../../components/organisms/navbar";
import Products from "../../components/organisms/products";
import SearchBar from "../../components/molecules/searchBar";
import CreatBookModal from "../../components/molecules/createBookModal";
import { useState } from "react";
import { useApiContext } from "../../context/api";


function ProductsPage() {
	const {user} = useApiContext();
	const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
	return( <>
	{user? 
		(<><div >
			<Navbar setCreateModalIsOpen={setCreateModalIsOpen} />
		</div>
		<div >
			<SearchBar />
		</div>

		<div className="mt-12 flex justify-center ">
			<Products />
			{createModalIsOpen && <CreatBookModal setOpen={setCreateModalIsOpen} />}
		</div>
		<div >
			<Footer />
		</div></>)
	:(<p>loading</p>)
}
</>)
}

export default ProductsPage;