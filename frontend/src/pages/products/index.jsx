import Footer from "../../components/organisms/footer";
import Navbar from "../../components/organisms/navbar";
import Products from "../../components/organisms/products";
import SearchBar from "../../components/molecules/searchBar";
import CreatBookModal from "../../components/molecules/createBookModal";
import { useState } from "react"
function ProductsPage() {
	const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
	return <>
		<div >
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
		</div>
	</>
}

export default ProductsPage;