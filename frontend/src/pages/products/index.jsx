import Footer from "../../components/organisms/footer";
import Navbar from "../../components/organisms/navbar";
import Products from "../../components/organisms/products";
import SearchBar from "../../components/molecules/searchBar";

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