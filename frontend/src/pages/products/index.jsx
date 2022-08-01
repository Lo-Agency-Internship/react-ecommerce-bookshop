import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Products from "../../components/products";
import SearchBar from "../../components/searchBar";

function ProductsPage() {
	return <>
		<div >
			<Navbar/>
		</div>
		<div >
			<SearchBar />
		</div>

		<div  className="mt-12 flex justify-center ">
			<Products/>
		</div>
		<div >
			<Footer />
		</div>
	</>
}

export default ProductsPage;