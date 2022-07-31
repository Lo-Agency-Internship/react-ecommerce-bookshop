import Products from "../../components/products";
import SearchBar from "../../components/searchBar";

function ProductsPage() {
	return <>
		<div className="">
			<SearchBar />
		</div>

		<div  className="mt-12 flex justify-center ">
			<Products/>
		</div>
	</>
}

export default ProductsPage;